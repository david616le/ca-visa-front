import React, { Component } from "react";
import { Form, Button, Select } from 'antd';
import * as constants from '../../../../utils/constants'
import * as utils from '../../../../utils'
import VisaSelect from "../../../../components/VisaSelect";
import VisaRadio from "../../../../components/VisaRadio";
import VisaInput from "../../../../components/VisaInput";
import { Upload, Icon, message, Checkbox, Row, Col, notification } from 'antd';
import SignatureCanvas from 'react-signature-canvas'
import axios from 'axios'
import qs from 'querystring'
import AvatarEditor from 'react-avatar-editor'
import resources, { translate } from '../../../../utils/resources'

import './index.scss'

const openNotificationWithIcon = (type, msg, descr) => {
  notification[type]({
    message: msg,
    description: descr
  });
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg';
  if (!isJpgOrPng) {
    message.error('You can only upload JPEG file!');
    return true
  }
  const isLt2M = file.size / 1024 / 1024 < 0.24;
  if (!isLt2M) {
    message.error('Image must smaller than 240KB!');
    return true
  }
  return false
}
const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  state = {
    loading: false,
    checked: false,
    nochange: true,
    isoResult: {
      background: false,
      eightbitCodingError: false,
      eyePosition: false,
      faceExist: false,
      faceHorizotalCenterPosition: false,
      facePitch: false,
      faceRoll: false,
      faceYaw: false,
      grayImage: false,
      maxFaceSize: false,
      minFaceSize: false,
      oneFace: false,
      sharpness: false,
      nophoto: false,
    },
    imageFile: null
  };
  componentDidMount() {
    this.setState({ nochange: true })
    this.updateCanvas()
  }

  componentWillReceiveProps() {
  }

  uploadFileToS3 = (file) => {
    return new Promise(async (resolve, reject) => {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('fileType', 'jpeg')
      await axios
        .post(
          constants.apiURL + "assets",
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then(response => {
          resolve(response.data.Location);
        })
        .catch(error => {
          message.error('Failed to upload photo');
          reject(error);
        })
    })
  }
  isoCheck = (canvas) => {
    return new Promise(async (resolve, reject) => {

      const base64 = canvas.toDataURL("image/jpeg")
      var imgDataUri = await this.resizedataURL(base64,700,900);
      const requestBody = {
        appId: '165846410465506',
        imgDataUri: imgDataUri
      }
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      await axios.post("https://evisa.kdmid.ru/api/IsoCheck", qs.stringify(requestBody), config)
        .then((result) => {
          resolve(result)
        })
        .catch((err) => {
          reject(err);
        })
    })
  }
  handleChange = info => {
    if (status !== 'uploading') {
      this.setState({ loading: true })
      this.uploadFileToS3(info.file)
          .then(imageUrl => {
              this.props.form.setFieldsValue( { data: { url: imageUrl } })
              this.setState({ loading: false })
          })
          .catch(err => {
              this.setState({ loading: false })
          })
    }
  };

  handleNewImage = e => {
    this.setState({ imageFile: e.target.files[0], checked: false, nochange: false })
  }

  handleScale = e => {
    const scale = parseFloat(e.target.value)
    this.setState({ checked: false, nochange: false })
    this.props.form.setFieldsValue( { data: { scale } })
  }

  handlePositionChange = position => {
    const {getFieldValue, setFieldsValue} = this.props.form

    if (!this.state.loading) {
      this.setState({ checked: false, nochange: false })
      if(this.state.imageFile || getFieldValue('data.url'))
        setFieldsValue( { data: { position } })
    }
  }

  resizedataURL = (datas, wantedWidth, wantedHeight) => {
    return new Promise(async function(resolve,reject){

        // We create an image to receive the Data URI
        var img = document.createElement('img');

        img.setAttribute('crossorigin', 'anonymous');

        // When the event "onload" is triggered we can resize the image.
        img.onload = function()
        {        
            // We create a canvas and get its context.
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

            // We set the dimensions at the wanted size.
            canvas.width = wantedWidth;
            canvas.height = wantedHeight;

            // We resize the image with the canvas method drawImage();
            ctx.drawImage(this, 0, 0, wantedWidth, wantedHeight);

            var dataURI = canvas.toDataURL();

            // This is the return of the Promise
            resolve(dataURI);
        };

        // We put the Data URI in the image's src attribute
        img.src = datas;

    })
  }

  checkPhoto = (e) => {

    const { checked, isoResult, nochange } = this.state
    const error = true
    if (this.editor) {

      this.setState({ loading: true })
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = this.editor.getImage()
 
      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      const canvasScaled = this.editor.getImageScaledToCanvas()

      this.isoCheck(canvasScaled).then(result => {
        console.log(result.data)
        let success = true
        Object.keys(result.data).map(key => {
          if(result.data[key] == false)
            success = false
        })
        if(success) {

          if(this.state.imageFile) {
            // In this case, user uploads a new image from his local drive
            this.uploadFileToS3(this.state.imageFile)
              .then(imageUrl => {
                  this.props.form.setFieldsValue( { data: { url: imageUrl, iso: canvasScaled.toDataURL('image/jpeg') } })
                  this.setState({ loading: false, checked: true, isoResult: result.data })

                  console.log(imageUrl)
                  this.props.handleNext(e, this.props.form, this.handleDates)
              })
              .catch(err => {
                  this.setState({ loading: false, checked: true, isoResult: result.data })
              })
          } else {
            // In this case, don't need to upload the photo again
            this.props.form.setFieldsValue( { data: { iso: canvasScaled.toDataURL('image/jpeg') } })
            this.setState({ loading: false, checked: true, isoResult: result.data })
            this.props.handleNext(e, this.props.form, this.handleDates)
          }
        } else {
          this.setState({ loading: false, checked: true, isoResult: result.data })
        }
      }).catch(err => {
        openNotificationWithIcon('error', 'Error!', 'Failed to Submit Photo!')
        this.setState({ loading: false, checked: false })
      })
    } else {
      this.setState({ checked: true, isoResult: { nophoto: true }})
    }
  }

  updateCanvas() {
    const ctx = this.refs.overlay.getContext('2d');
    ctx.beginPath();
    ctx.setLineDash([5, 3]);
    ctx.ellipse(145, 170, 75, 105, 0, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'lime';
    ctx.stroke();
    
    ctx.beginPath();
    ctx.ellipse(145, 170, 90, 120, 0, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'lime';
    ctx.stroke();
  }

  setEditorRef = (editor) => {
    this.editor = editor
  }

  render() {
    const { getFieldDecorator, isFieldTouched } = this.props.form;
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
        md: { span: 24 }
      },
    };

    const { showPrev, showNext, data, lang } = this.props
    const { checked, isoResult, loading, imageFile } = this.state

    const tr = (r) => translate(r, lang);

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    getFieldDecorator('data.url', { initialValue: utils.getInitialValue(data.url) });
    getFieldDecorator('data.scale', { initialValue: utils.getInitialValue(data.scale ? data.scale : 1) });
    getFieldDecorator('data.position', { initialValue: utils.getInitialValue(data.position ? data.position : {x: 0, y: 0}) });
    getFieldDecorator('data.iso', { initialValue: utils.getInitialValue(data.iso ? data.iso : null) });
    
    const imageUrl = this.props.form.getFieldValue('data.url')
    const scale = this.props.form.getFieldValue('data.scale')
    const position = this.props.form.getFieldValue('data.position')
    const rotate = 0

    const activeImg = imageFile ? imageFile : imageUrl

    return (
      <Form {...formItemLayout} className="new-kdmid-photo-upload-form">
        
        <div className="visa-global-heading-1">
          {tr(resources.photo.section_title)}
        </div>
        <ul className="visa-global-ul-1">
          {resources.photo.descriptions.map((descr, index) => <li key={index}><p><span>{tr(descr)}</span></p></li>)}
        </ul>

        <Form.Item label={tr(resources.photo.applicant_photo)} extra="Upload your digital color photo in the JPEG format. The photo must meet the above requirements." required>
          <div>
            <canvas id="canvas_overlay" width="290" height="358" ref="overlay" style={{position: 'absolute', pointerEvents: 'none', display: activeImg ? 'block' : 'none'}}></canvas>
            {activeImg && <AvatarEditor
              ref={this.setEditorRef}
              scale={parseFloat(scale)}
              width={240}
              height={308}
              position={position}
              onPositionChange={this.handlePositionChange}
              rotate={parseFloat(rotate)}
              borderRadius={2}
              image={activeImg}
              className="editor-canvas"
              crossOrigin="anonymous"
            />}
            {this.state.checked && 
              <ul className="applicant-photo__errors">
                {isoResult.nophoto == true && <li>{tr(resources.validations.requiredPhoto)}</li>}
                {isoResult.faceExist == false && <li>The face is not detected</li>}
                {isoResult.eyePosition == false && <li>Eye level does not fall within the required area</li>}
                {isoResult.maxFaceSize == false && <li>The size of the face exceeds the maximum admissible size (photo taken at too short range)</li>}
                {isoResult.faceHorizotalCenterPosition == false && <li>The face is shifted to the left or right from the center</li>}
                {/* needs to be updated */}
                {isoResult.background == false && <li>Background Error</li>}
                {isoResult.eightbitCodingError == false && <li>8-bit coding Error</li>}
                {isoResult.facePitch == false && <li>Pitch Error</li>}
                {isoResult.faceRoll == false && <li>Roll Error</li>}
                {isoResult.faceYaw == false && <li>Yaw Error</li>}
                {isoResult.grayImage == false && <li>Gray-image Error</li>}
                {isoResult.minFaceSize == false && <li>Min-Face Error</li>}
                {isoResult.oneFace == false && <li>One Face Error</li>}
                {isoResult.sharpness == false && <li>Sharpness Error</li>}
              </ul>
            }
          </div>
          <br />
          New File:
          <input name="newImage" type="file" onChange={this.handleNewImage} disabled={loading}/>
          <br />
          Zoom:
          <input
            name="scale"
            type="range"
            onChange={this.handleScale}
            min="1"
            max="2"
            step="0.01"
            defaultValue={scale}
            disabled={loading}
          />
        </Form.Item>

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} disabled={loading} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
          {showNext && <Button type="primary" loading={loading} onClick={(e) => { e.persist(); this.checkPhoto(e)}}>{tr(resources.next)}</Button>}
          {/* <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>{tr(resources.save_and_continue_later)}</Button> */}
        </div>
      </Form>

    );
  }
}
const Form_Photo = Form.create()(MyForm)
export default Form_Photo;

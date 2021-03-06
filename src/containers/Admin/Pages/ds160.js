import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ADMIN } from "../../../actions/types";
import * as constants from "../../../utils/constants";
import { Layout, Menu, Breadcrumb, Table, Divider, Tag, Button, Modal, notification, Input } from "antd";
const { Header, Content, Footer } = Layout;

const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message: message,
    description: description
  });
};

import * as utils from "../../../utils/index";
import KdmidStatus from "./KdmidStatus";

class AdminPageDS160 extends Component {
  static defaultProps = {
    pagination: {
      current: 1,
      pageSize: 10
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      visible_send_email_modal: false,
      loading_send_email: false,
      selected_record: null,
      visible_kdmid_status_modal: false,
      kdmid_status: {}
    };
  }
  loadList = (pagination, isAdmin) => {
    this.props.getCustomersList(
      ADMIN.GET_CUSTOMER_LIST_REQUEST,
      {
        limit: pagination.pageSize,
        skip: pagination.pageSize * (pagination.current - 1),
        search: pagination.search,
        filters: utils.getFilterString(pagination.filters)
      },
      isAdmin
    );
  };
  componentDidMount() {
    this.loadList(this.props.pagination, this.props.user && this.props.user.role == constants.USER_ROLE.ADMIN);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.pattern != this.props.pattern) {
      this.loadList(nextProps.pagination, false);
    }
  }

  handleTableChange = (pagination, filters, sorter) => {
    let filterString = utils.getFilterString(filters);

    this.props.history.push({
      pathname: "/board/ds160",
      search: `?current=${pagination.current}` + (pagination.search ? `&search=${pagination.search}` : "") + filterString
    });
  };

  onClickSendEmail = record => {
    this.setState({
      visible_send_email_modal: true,
      selected_record: record
    });
  };

  hideSendEmailModal = () => {
    this.setState({
      visible_send_email_modal: false,
      selected_record: null
    });
  };

  handleSendEmail = () => {
    const { selected_record } = this.state;
    this.setState({
      loading_send_email: true
    });
    this.props.resendEmail(ADMIN.RESEND_EMAIL_REQUEST, selected_record._id, result => {
      if (result.error) {
        openNotificationWithIcon("error", "Failed to send an email!", `There isn't such email template based on the interview location.`);
      } else if (result.data && result.data.status == 404) {
        openNotificationWithIcon("error", "Failed to send an email!", `There isn't such email template based on the interview location.`);
      } else if (result.data && result.data.status == 500) {
        openNotificationWithIcon("error", "Failed to send an email!", `There isn't such email template based on the interview location.`);
      } else {
        openNotificationWithIcon("success", "Successfully sent!", "The email has been sent");
        this.loadList(this.props.pagination);
      }
      this.setState({
        loading_send_email: false,
        visible_send_email_modal: false
      });
    });
  };

  handleSearchKeyDown = event => {
    if (event.keyCode == 13) this.searchString();
  };

  searchString = () => {
    const search = this.refs.search_input.state.value;

    const { pagination } = this.props;
    let filterString = utils.getFilterString(pagination.filters);

    if (pagination.search != search)
      this.props.history.push({
        pathname: "/board/ds160",
        search: `?current=${pagination.current}` + (search && search.length ? `&search=${search}` : "") + filterString
      });
  };

  onSubmitWithoutPayment = record => {
    this.props.automate(ADMIN.AUTOMATE_REQUEST, record._id, result => {
      // openNotificationWithIcon
      if (result.error) {
        openNotificationWithIcon("error", "Failed", "Failed to submit without payment");
      } else {
        openNotificationWithIcon("success", "Success", "Successed to submit without payment. Please wait few mins to complete");
        this.loadList(this.props.pagination);
      }
    });
  };

  onCheckKdmidStatus = record => {
    this.setState({ visible_kdmid_status_modal: true, loading_kdmid_status: true, kdmid_status: {} });
    this.props.getKdmidStatus(ADMIN.GET_KDMID_STATUS_REQUEST, record._id, result => {
      this.setState({ loading_kdmid_status: false, kdmid_status: result });
    });
  };

  hideModal = () => {
    this.setState({ visible_kdmid_status_modal: false, kdmid_status: {} });
  };

  render() {
    const { data, pagination, loading, total, user } = this.props;
    const { visible_send_email_modal, loading_send_email, selected_record, loading_kdmid_status, visible_kdmid_status_modal, kdmid_status } = this.state;

    let agencyFilter = [];
    if (this.props.users) {
      this.props.users.forEach(user => {
        if (user.approved && user.role == constants.USER_ROLE.AGENCY) agencyFilter.push({ text: user.username, value: user.username });
      });
      agencyFilter.push({ text: "none", value: "none" });
    }

    const columns = [
      {
        title: "ID",
        dataIndex: "app_id",
        key: "app_id",
        render: (text, record) => (
          <a href={`https://kdmid-evisa.com/visa/application-form/token=${record._id}` + (record.agency ? `?agency=${record.agency}` : "")} target="blank">
            {text}
          </a>
        )
      },
      {
        title: "Surname",
        dataIndex: "surname",
        key: "surname"
      },
      {
        title: "First Names",
        dataIndex: "firstnames",
        key: "firstnames"
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email"
      },
      {
        title: "Nationality",
        key: "citizenCode"
        // render: (text, record) => {
        //   const citizenList = constants.export_list(constants.new_kdmid_citizenCode_list)
        //   const citizenCodeIndex = citizenList.findIndex(item => item.value == record.citizenCode)
        //   if(citizenCodeIndex >= 0)
        //     return citizenList[citizenCodeIndex].label
        // }
      },
      // {
      //   title: 'Created At',
      //   dataIndex: 'createdAt',
      //   key: 'createdAt',
      //   ellipsis: true
      // },
      {
        title: "Agency",
        dataIndex: "agency",
        key: "agency",
        filters: agencyFilter,
        filteredValue: pagination.filters.agency
        // onFilter: (value, record) => {
        //   return value == record.agency
        // }
      },
      {
        title: "Transaction ID",
        dataIndex: "transaction.transaction_id",
        key: "transaction.transaction_id"
      },
      {
        title: "Checkout",
        key: "checkout",
        render: (text, record) => {
          if (!record.completed) return <Tag color="red">Not completed</Tag>;
          if (!record.paid) return <Tag color="volcano">Not paid</Tag>;
          return <Tag color="geekblue">Paid</Tag>;
        },
        filters: [
          { text: "Paid", value: "paid" },
          { text: "Not paid", value: "not_paid" },
          { text: "Not completed", value: "not_completed" }
        ],
        filteredValue: pagination.filters.checkout,
        onFilter: (value, record) => {
          if (value == "paid") return record.completed && record.paid;
          if (value == "not_paid") return record.completed && !record.paid;
          return !record.completed;
        }
      },
      {
        title: "Automation Status",
        key: "automation_status",
        render: (text, record) => {
          if (!record.completed) return "-";
          if (!record.automation_status) return <Tag color="volcano">Pending</Tag>;
          if (record.automation_status.result == "processing") return <Tag color="green">In progress</Tag>;
          if (record.automation_status.error || record.automation_status.result == "fail") return <Tag color="red">Failed</Tag>;
          if (record.automation_status.result == "success" && record.automation_status.email_status == false)
            return (
              <>
                <Tag color="geekblue">Success</Tag>
                <Tag color="magenta">Email not sent</Tag>
              </>
            );
          return <Tag color="geekblue">Success</Tag>;
        },
        filters: [
          { text: "-", value: "not_completed" },
          { text: "Pending", value: "pending" },
          { text: "In progress", value: "in_progress" },
          { text: "Failed", value: "failed" },
          { text: "Success", value: "success" }
        ],
        filteredValue: pagination.filters.automation_status,
        onFilter: (value, record) => {
          if (value == "not_completed") return !record.completed;
          if (value == "pending") return record.completed && !record.automation_status;
          if (value == "in_progress") return record.completed && record.automation_status && record.automation_status.result == "processing";
          if (value == "failed") return record.completed && record.automation_status && (record.automation_status.result == "fail" || record.automation_status.error);
          if (value == "not_sent") return record.completed && record.automation_status && record.automation_status.result == "success" && record.automation_status.email_status == false;
          return record.completed && record.automation_status && record.automation_status.result == "success" && record.automation_status.email_status != false;
        }
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => {
          if (!record.completed) return "-";
          if (user.role != constants.USER_ROLE.ADMIN) {
            if (!record.automation_status) {
              return (
                <Button type="primary" shape="round" size="small" icon="credit-card" onClick={() => this.onSubmitWithoutPayment(record)}>
                  Submit without payment
                </Button>
              );
            }
            return "-";
          }
          if (!record.automation_status) return "-";
          if (record.automation_status.error) {
            return (
              <>
                <Button type="danger" shape="round" icon="warning" size="small">
                  {user.role == constants.USER_ROLE.ADMIN ? (
                    <a href={`https://s3.us-east-2.amazonaws.com/assets.new-kdmid/PDF/${record._id}_error.pdf`} style={{ textDecoration: "none", color: "white" }}>
                      {" "}
                      Check Errors
                    </a>
                  ) : (
                    <a style={{ textDecoration: "none", color: "white" }} disabled>
                      {" "}
                      Check Errors
                    </a>
                  )}
                </Button>
                {user.role == constants.USER_ROLE.ADMIN && (
                  <Button type="primary" shape="round" size="small" icon="credit-card" onClick={() => this.onSubmitWithoutPayment(record)}>
                    Submit without payment
                  </Button>
                )}
              </>
            );
          }
          if (record.automation_status.result == "success") {
            return (
              <Button type="primary" shape="round" size="small" onClick={() => this.onCheckKdmidStatus(record)}>
                Check Kdmid Status
              </Button>
            );
          }
          return "-";
        }
      }
    ];

    return (
      <div className="admin-page-ds160">
        {this.state.visible_kdmid_status_modal && (
          <Modal title="Check Kdmid Status" visible={this.state.visible_kdmid_status_modal} footer={null} onCancel={this.hideModal} width="80%">
            <div className="admin-page-ds160-check-status" style={{ minHeight: "300px" }}>
              <KdmidStatus loading={loading_kdmid_status} data={kdmid_status.data} />
            </div>
          </Modal>
        )}
        <div className="admin-page-ds160__top">
          <Input placeholder="Search (ID, Name, Email Address) here" defaultValue={pagination.search} name="search_input" ref="search_input" style={{ width: "300px", marginRight: "10px" }} onKeyDown={this.handleSearchKeyDown} />
          <Button type="primary" icon="search" onClick={this.searchString}>
            Search
          </Button>
        </div>
        <Table
          columns={columns}
          rowKey={record => record._id}
          dataSource={data}
          pagination={{ pageSize: pagination.pageSize, current: pagination.current, total: total }}
          loading={loading}
          onChange={this.handleTableChange}
          expandedRowRender={record => {
            if (!record.transaction) {
              return (
                <p style={{ margin: 0 }}>
                  {`_id: ${record._id}`}
                  <br />
                  {`kdmid_id: ${record.kdmid_id}`}
                  <br />
                  No transaction
                </p>
              );
            }
            return (
              <p style={{ margin: 0 }}>
                {`_id: ${record._id}`}
                <br />
                {`kdmid_id: ${record.kdmid_id}`}
                <br />
                {`total: ${record.transaction.total}`}
                <br />
                {`order_key: ${record.transaction.order_key}`}
                <br />
                {`customer_id: ${record.transaction.customer_id}`}
                <br />
                {`payment_method: ${record.transaction.payment_method}`}
                <br />
                {`cart_hash: ${record.transaction.cart_hash}`}
                <br />
              </p>
            );
          }}
        />
        {/*visible_send_email_modal*/ false && (
          <Modal
            title={`Send Email to ${selected_record.email}`}
            visible={visible_send_email_modal}
            confirmLoading={loading_send_email}
            onOk={this.handleSendEmail}
            onCancel={() => {
              if (!loading_send_email) this.hideSendEmailModal();
            }}
          >
            <div className="ds160-send-email-modal">
              {`Application ID: ${selected_record.app_id}`}
              <br />
              {`Surname: ${selected_record.surname}`}
              <br />
              {`Given Name: ${selected_record.given_name}`}
              <br />
              {`Interview Location: ${selected_record.location}`}
              <br />
              {`Created At: ${selected_record.createdAt}`}
              <br />
              <br />
              There was no such email template based on <Tag color="geekblue">{`${selected_record.location.split(",")[0]}`}</Tag>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCustomersList: (type, options, isAdmin) => {
      dispatch({ type, options, isAdmin });
    },
    setPagination: (type, pagination) => {
      dispatch({ type, pagination });
    },
    resendEmail: (type, _id, cb) => {
      dispatch({ type, _id, cb });
    },
    automate: (type, _id, cb) => {
      dispatch({ type, _id, cb });
    },
    getKdmidStatus: (type, _id, cb) => {
      dispatch({ type, _id, cb });
    }
  };
};

const mapStateToProps = state => ({
  data: state.admin.data,
  total: state.admin.totalCount,
  loading: state.admin.loading,
  users: state.admin.users,
  totalUserCnt: state.admin.totalUserCnt
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminPageDS160));

function welcome(props) {
    const component = require('./' + props.lang).default
    return component()

    return <LazyLoadModule resolve={() => import("./" + props.lang)} />
}
export default welcome;
import PropTypes from 'prop-types'

function Item(props) {
    return(
        <>
            <li>{props.fruta}, nota {props.nota}</li>
        </>
    )
}

Item.propTypes = {
    fruta: PropTypes.string.isRequired, //é requirida
    nota: PropTypes.number,
}

Item.defaultProps = {
    fruta: 'sem nome',
    nota: 0.
}

export default Item
import './style.scss'


type TProps = {
    label: string
    isDisabled: boolean
    size: 'small' | 'medium' | 'large' | 'xs'
}

export default function Button (props:TProps) {
    return (
        <button disabled={props.isDisabled} className={`button--size-${props.size} button`}>
            {props.label}
        </button>
    )
}
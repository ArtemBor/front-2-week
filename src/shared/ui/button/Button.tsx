import './style.scss'
import Icon from '../icon/Icon'
import { ReactElement } from 'react'


type TProps = {
    label: string
    isDisabled: boolean
    size: 'large' | 'medium' | 'small' | 'xs'
    variant: 'dark' | 'light' | 'superLight' |'danger' | 'lightDanger'
    onClick: () => void
    isRounded: boolean
    isMini: boolean
    prependIcon?: ReactElement
    appendIcon?: ReactElement
}

export default function Button (props:TProps) {
    return (
        <button disabled={props.isDisabled}
                onClick={props.onClick}
                className={`button--size-${props.size} button--variant-${props.variant} ${props.isRounded ? 'button--rounded' : ''} ${props.isMini ? 'button--mini' : ''} button`}>
                {props.prependIcon ? (<div className="button__icon">{props.prependIcon}</div>) : null}
                <Icon icon={'plus'}></Icon>
                {props.label}
                <Icon icon={'arrow'}></Icon>
        </button>
    )
}
import React, {ButtonHTMLAttributes, DetailedHTMLProps, useState} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>
type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    // const finalClassName = s.button
    // + xType ? xType === 'red' ? s.red : '' : ''
    // + (disabled
    // ? ...
    // : xType === 'red'
    //     ? ...
    // + (className ? ' ' + className : '') // задачка на смешивание классов
    const finalClassName = `
        ${s.button}
        ${xType
        ? xType === 'red'
            ? s.red
            : xType === 'secondary'
                ? s.secondary
                : s.default
        : s.default}
        ${disabled ? s.disabled : s.default}
    `

    const [currentText, setCurrentText] = useState(restProps.children);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            onMouseEnter={() => {
                setIsHovered(true);
                setCurrentText("При наведении");
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                setCurrentText(restProps.children);
            }}
            onMouseDown={() => setCurrentText("При нажатии")}
            onMouseUp={() => setCurrentText(isHovered ? "При наведении" : restProps.children)}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >
            {currentText}
        </button>
    )
}

export default SuperButton

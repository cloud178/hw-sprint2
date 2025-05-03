import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '150px',
                color: '#00CC22', // основной цвет (работает и для track и thumb)
                '& .MuiSlider-thumb': {
                    width: 20, // внешний диаметр
                    height: 20,
                    backgroundColor: '#fff',
                    border: '1px solid #00CC22', // внешний круг
                    '&::before': {
                        top: '50%',
                        left: '50%',
                        width: 6,
                        height: 6,
                        backgroundColor: '#00CC22', // внутренний круг
                        transform: 'translate(-50%, -50%)',
                        boxShadow: 'none'
                    },
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    opacity: 1
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

import React from 'react'
import { Select } from 'semantic-ui-react'

const partyOptions = [
    { key: 0, value: '선택하지않음', text: '선택하지않음' },
    { key: 1, value: '더불어민주당', text: '더불어민주당' },
    { key: 2, value: '자유한국당', text: '자유한국당' },
    { key: 3, value: '바른미래당', text: '바른미래당' },
    { key: 4, value: '우리공화당', text: '우리공화당' },
    { key: 5, value: '민주평화당', text: '민주평화당' },
    { key: 6, value: '민중당', text: '민중당' },
    { key: 7, value: '정의당', text: '정의당' },
    { key: 8, value: '새누리당', text: '새누리당' },
    { key: 9, value: '기본소득당', text: '기본소득당' },
    { key: 10, value: '우리미래', text: '우리미래' },
    { key: 11, value: '국제녹색당', text: '국제녹색당' },
    { key: 12, value: '노동당', text: '노동당' },
]

const SelectExample = () => (
    <Select placeholder='여기를 눌러 선택하세요' options={partyOptions} id="party"/>
)

export default SelectExample
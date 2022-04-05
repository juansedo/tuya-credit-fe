import * as React from 'react'
import Svg, { Path, Rect, Defs, Pattern, Image, Use } from 'react-native-svg';

const HomeIcon = () => {
    return (
    <Svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <Rect width="29" height="28" fill="url(#pattern0)"/>
        <Defs>
            <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <Use xlinkHref="#image0_306_14" transform="translate(0.0172414) scale(0.00188578)"/>
            </Pattern>
            <Image id="image0_306_14" width="512" height="512" xlinkHref="data:image/png;base64,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"/>
        </Defs>
    </Svg>
    )
}

export default HomeIcon
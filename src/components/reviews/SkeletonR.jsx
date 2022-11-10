import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonR = (props) => (
    <ContentLoader
        speed={2}
        width={250}
        height={150}
        viewBox="0 0 250 150"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="-5" y="301" rx="17" ry="17" width="280" height="76" />
        <rect x="140" y="388" rx="15" ry="15" width="124" height="45" />
        <rect x="1" y="388" rx="15" ry="15" width="124" height="45" />
        <rect x="2" y="10" rx="14" ry="14" width="162" height="42" />
        <rect x="2" y="84" rx="14" ry="14" width="210" height="61" />
    </ContentLoader>
)

export default SkeletonR
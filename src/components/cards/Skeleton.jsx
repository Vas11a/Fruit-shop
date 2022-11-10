import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 250 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="-5" y="301" rx="17" ry="17" width="280" height="76" />
        <rect x="140" y="388" rx="15" ry="15" width="124" height="45" />
        <rect x="1" y="388" rx="15" ry="15" width="124" height="45" />
        <circle cx="126" cy="86" r="80" />
        <rect x="56" y="222" rx="25" ry="25" width="140" height="48" />
        <rect x="98" y="178" rx="10" ry="10" width="56" height="34" />
    </ContentLoader>
)

export default Skeleton
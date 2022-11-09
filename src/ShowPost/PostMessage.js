import girl from '../image/sex1.png'
import boy from '../image/sex2.png'
const PostMessage = (props) => {
    const { id, sex, name, time, desc } = props.msg;
    return (
        <div style={{ padding: '0 60px' }}>
            <div style={{ paddingTop: 20, paddingBottom: 16 }}>
                <div style={{ display: 'flex', overflow: 'hidden' }}>
                    <div style={{ flexShirk: 0, paddingRight: 8 }}>
                        <div style={{ borderRadius: '25%', overflow: 'hidden', display: 'flex' }}>
                            <img src={sex === 'girl' ? girl : boy} style={{ width: 30, height: 25, paddingRight: 5 }} alt="" />
                        </div>
                    </div>
                    <div style={{ flex: ' 1 1 0%', overflow: 'hidden' }}>
                        <div style={{ display: 'flex', overflow: 'hidden', alignItems: 'flex-start' }}>
                            <div style={{
                                flex: '1 1 0 %',
                                minWidth: '0px',
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '20px',
                                paddingBottom: '4px'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span>{name}</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div style={{ color: 'rgba(0,0,0,0.75)', fontSize: '16px', lineHeight: '28px' }}>
                            <div style={{ whiteSpace: 'break-spaces', wordBreak: 'break-word' }}>
                                <span>{desc}</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', paddingTop: 4, overflow: 'hidden', alignItems: 'center', fontWeight: 400, fontSize: 14, lineHeight: '14px', color: 'rgba(0,0,0,0.75)' }}>
                            <div style={{ display: 'flex', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                <span>
                                    <span>
                                        B{id}
                                    </span>
                                    ．
                                    <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: 'rgba(0,0,0,0.75)' }}>
                                        {time}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ borderBottom: '1px solid rgb(233, 233, 233)' }} />
        </div >
    )
}
export default PostMessage;
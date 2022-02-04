import React from 'react'

const listSrcImage = [
    "https://marvel-live.freetls.fastly.net/serve/2020/9/028e71296f5a47dcb45a06882b9a01ed.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/63e83c3c04364f8299c6f52e5aa00f87.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/3e43c0622e994879b2b172b02096c47e.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/412594e1b45412d8eb6b710c556284c.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/fe10e2232f8c45fe82d0cf16c4a81816.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/965d359adf1d4acfa7c680b2192947fc.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/c5558a9e9eda4d05835207686e8073e0.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/57e583683dd241a489b46461bc16b6f8.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/bd07d796ec6747008641d894d2c3e224.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/2d44803632a64c8da50184a01b2e8583.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/f74c2297afe14839825e0b7c5bc689fa.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/90bae4c0ef484281a54556208fa37e89.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/53528ce393a745928c9569670d84cff9.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/87636218c5447ebb9fc7b03945e6058.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/b5310be28e85428ba8e2abb15bb99c62.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/ff6512917de440d2aa80723d1df87e85.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/2d44803632a64c8da50184a01b2e8583.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/3e43c0622e994879b2b172b02096c47e.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/63e83c3c04364f8299c6f52e5aa00f87.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/57e583683dd241a489b46461bc16b6f8.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/bd07d796ec6747008641d894d2c3e224.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/90bae4c0ef484281a54556208fa37e89.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/412594e1b45412d8eb6b710c556284c.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/f74c2297afe14839825e0b7c5bc689fa.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/53528ce393a745928c9569670d84cff9.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/fe10e2232f8c45fe82d0cf16c4a81816.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/c5558a9e9eda4d05835207686e8073e0.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/ff6512917de440d2aa80723d1df87e85.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/b5310be28e85428ba8e2abb15bb99c62.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/965d359adf1d4acfa7c680b2192947fc.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/87636218c5447ebb9fc7b03945e6058.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/9528dd223b0e477891ed1943bfafd565.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/6556ecfcd261497bb54e762776b091c8.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/87448c4bb81249a4ab9f3d61ae4a75c4.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/0bedae87fc804866b319f062d444474f.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/912e200d6448438fb9657de0b6e618.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/098c312a55814b1db79d97bd2151e293.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/cb76e70df7194507a884a34ef0799931.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/9e0bae9407d8472da7ce43df0b4336fd.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/f1c0775cb81d424c867f6829b9abd286.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/c101124b5d0c485f883afc9475026513.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/3d5674fbeeb645acad1426ee3c2c9273.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/5deed240889b4b668bab6f8e5941c6e3.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/4c186d8012594b1eb97811d16c1cf23c.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/0c2f2ff390042a1b4786124551c8997.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/3874e1d82c2241c385e0eaf30e906b55.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/8b7d6dca16084324863bf259db405382.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/9b6f31af59ce4d9998680d61b95dc9e3.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/739a2edd1ddf4542880c764ab23afffe.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/712d560e71448baa5fb514686d62310.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/4e11efbb4757427ea768e86523f57082.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/9fb267939b36483f97d244871d1de65b.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/6ea36a6acba841f3acf8293148f0f6d3.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/2e5ac5f624bd4963b2412de796514fd6.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/fe658705fc744fb968ac00af9cee9c4.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/07277ea40bb4bb0ad490068ec2b9f28.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/c2ac9b4569cc41f29d27e3b7fb01e5d3.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/8dbbc1713bd84a069cb8628390574246.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/5b14f33ea26d462aadeea6693fb87cf9.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/8b291fc526744ba69533c212b4dc58c6.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/7535654b025a41b1b0eb78eddc84c78e.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/01ac9667664f43a982d49aaf6f3dcde1.png?quality=95&amp;fake=.png",
    "https://marvel-live.freetls.fastly.net/serve/2020/9/cbe2f984fa2447fb86ef996ef9f07d0f.png?quality=95&amp;fake=.png"
]

const TestViewImageRailink = () => {
    const [modal, setModal] = React.useState(false)
    const [srcImage, setSrcImage] = React.useState("")

    const viewImage = (image) => {
        setModal(true)
        setSrcImage(image)
    }

    return (
        <>
            <div style={{marginLeft: 10}}>
                {listSrcImage.map((value, index) => 
                    <img 
                        key={index}
                        style={{cursor: 'pointer', marginRight: 5}} 
                        src={value} alt="123" width="440"
                        onClick={() => viewImage(value)}
                    />
                )}
            </div>
            {modal && 
            <div className="modal" onClick={() => setModal(false)}>
                <div className="modal-content">
                    <button style={{marginBottom: 10, width: 50, height: 30, cursor: 'pointer'}} onClick={() => setModal(false)}>X</button>
                    <img src={srcImage} alt="image123" width="830" />
                </div>
            </div>}
        </>
    )
}

export default TestViewImageRailink
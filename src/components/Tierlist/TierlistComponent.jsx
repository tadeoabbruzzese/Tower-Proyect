import React from 'react';
import './TierlistComponent.css'

const tierListData = [
    { tier: 'S', images: ['src/assets/images/yanmiao.jpg', 'src/assets/images/nanyin.jpg', 'src/assets/images/mimi1.jpg', 'src/assets/images/yulan.jpg','src/assets/images/Fiona.jpg', 'src/assets/images/zeke.jpg' ] },
    { tier: 'A', images: ['src/assets/images/linghan.jpg','src/assets/images/feise.jpg','src/assets/images/lihuo.jpg','src/assets/images/lyra.jpg' , 'src/assets/images/lan.jpg','src/assets/images/cocoritter.jpg'] },
    { tier: 'B', images: ['src/assets/images/claudia.jpg','src/assets/images/sakifuwa.jpg', 'src/assets/images/zero.jpg','src/assets/images/icarus.jpg'  ,'src/assets/images/fenrir.jpg' , 'src/assets/images/gnono.jpg', 'src/assets/images/lin.jpg', 'src/assets/images/annabella.jpg', 'src/assets/images/alyss.jpg'  ] },
    { tier: 'C', images: ['src/assets/images/nemesis.jpg'  ,'src/assets/images/tianlang.jpg', 'src/assets/images/ruby.jpg','src/assets/images/rubilia.jpg', 'src/assets/images/umi.jpg' ,'src/assets/images/tsubasa.jpg', 'src/assets/images/frigg.jpg', 'src/assets/images/marc.jpg', 'src/assets/images/bayueki.jpg'   ] },
    { tier: 'D', images: ['src/assets/images/samir.jpg', 'src/assets/images/crow.jpg', 'src/assets/images/king.jpg', 'src/assets/images/shiro.jpg', 'src/assets/images/cobaltb.jpg', 'src/assets/images/huma.jpg', 'src/assets/images/meryl.jpg'    ] },
  ];
  
  const getTierColor = (tier) => {
    switch (tier) {
      case 'S':
        return '#e57373'; // Bordo
      case 'A':
        return '#ffb74d'; // Naranja
      case 'B':
        return '#fff176'; // Amarillo
      case 'C':
        return '#aed581'; // Verde
      case 'D':
        return '#81c784'
      default:
        return '#FFFFFF'; // Blanco por defecto
    }
  };
  
  const TierListTable = () => {
    return (
      <div className="tierList-contenedor">
        <div className="tierlist-children">
          <table>
            <thead>
              <tr>
                <th>Tier</th>
                <th>Characters</th>
              </tr>
            </thead>
            <tbody>
              {tierListData.map((data, index) => (
                <tr key={index}>
                  <td style={{ backgroundColor: getTierColor(data.tier)}}>
                    {data.tier}
                  </td>
                  <td>
                    {Array.isArray(data.images) ? (
                      data.images.map((imageUrl, imgIndex) => (
                        <img key={imgIndex} src={imageUrl} alt={`Imagen ${data.tier}-${imgIndex}`} className="img-tierlist" />
                      ))
                    ) : (
                      <img src={data.image} alt={`Imagen ${data.tier}`} className="img-tierlist" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  

function TierlistComponent() {
  return (
    <div className="App">
      <TierListTable />
    </div>
  );
}

export default TierlistComponent;

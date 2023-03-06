import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Parallax from '../components/Parallax';
import { setIsLoading } from '../store/slices/isLoading.slice';

const Home = () => {
  const pathname = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);


  return (
    <main id="home">
      <div className='producto_destacado'>
        <div className='img_destacado'></div>
        <div className="fp_description">
          <h4 className="txtkalan">Producto en D%scuento<br/><span>Vinil Glitter</span></h4>
          {/* <p>Vinil Glitter importado. Medida standart (25 x 70cm). Con 10% de descuento hasta agotar stock</p> */}
          <h5 className="txtkalan">$3.00</h5>
          <div className="fp_btn">
            <a href="#discover"><div className="discover">Discover</div></a>
            <div className="add_cart" id="add_cart">AL CARRITO</div>
          </div>
        </div>
      </div>
      <Parallax />
      <div class="filter_contain" id="filter_contain">
            <div class="all">
                <h4 id="ancla_menu_productos">Mostrar Todos</h4>
                <p>Todos los productos</p>
            </div>
            <div class="materiales">
                <div class="viniles">
                    <h4>Viniles</h4>
                    <p>Disponibles <span id="count_viniles"></span></p>
                </div>
                <div class="cintas">
                    <h4>Cintas</h4>
                    <p>Disponibles <span id="count_cintas"></span></p>
                </div>
                <div class="apliques">
                    <h4>Apliques</h4>
                    <p>Disponibles <span id="count_apliques"></span></p>
                </div>
                <div class="decorables">
                    <h4>Decorables</h4>
                    <p>Disponibles <span id="count_decorables"></span></p>
                </div>
            </div>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ut eligendi fuga sapiente nisi illo magni quasi iusto sint, repudiandae modi a quo facere possimus, quos, ipsam suscipit numquam maxime.
        Accusamus, sed! Voluptate tempore excepturi minima molestias vitae nesciunt animi, pariatur itaque ex, architecto facilis nulla commodi numquam esse placeat totam officiis inventore maiores at! Quod accusantium aperiam ad quia.
        Impedit nulla rerum, nam atque, ducimus ullam dicta tempore aspernatur, velit labore accusamus. Recusandae, consequuntur nihil consequatur odit repellat quisquam quas quod rerum quis vitae, neque expedita, illo aut optio.
        Blanditiis incidunt quasi quo, aliquid molestiae debitis ex, ea repellendus, velit qui cum tempore quaerat provident. A eos dolores at, consequuntur sapiente amet necessitatibus tempora, dolor ut ad labore reiciendis.
        Atque quo dolores obcaecati possimus ad pariatur architecto tempore eveniet recusandae laboriosam, quos exercitationem eligendi unde accusamus velit nostrum ut blanditiis saepe quisquam quibusdam consequatur? Sint ab sed totam culpa.
        Amet rerum tenetur magnam tempora qui, molestiae nihil esse mollitia. Sed voluptatibus odio dolore est suscipit harum ratione libero. Dolor earum ducimus est? Error, qui amet repudiandae labore aut sed!
        In tenetur, sit magni, dolorum corrupti eveniet optio ratione sed animi, fugit iusto quibusdam? Laboriosam vitae explicabo rem delectus inventore ipsam, dolorum ducimus et, aliquid libero minus, nemo beatae ea.
        Ut a sequi eveniet? Itaque officiis ipsum, quo quisquam similique consectetur fuga fugiat dolorum numquam praesentium. Temporibus vero sequi ipsa harum eveniet. Neque nam quod assumenda minima officia odio dolor.
        Repellat, perferendis unde? Dignissimos voluptatem repellat quaerat quo asperiores laudantium vel nihil ut natus illum, architecto magni libero ducimus provident quas voluptas, labore sunt, quos debitis aut consequuntur. Officiis, necessitatibus.
        Minima voluptatum dolorem veritatis, amet quae vel velit nisi asperiores adipisci consectetur! Facilis vero mollitia, dolore maiores vel animi minima sed blanditiis, earum perspiciatis itaque cum provident aliquid ea culpa!
        Ullam id ratione omnis! Vel, labore odio. Accusantium minima veritatis beatae totam ratione eveniet voluptatem quibusdam ipsum fuga aliquam fugiat voluptate ad eaque dignissimos rem, hic repellendus autem cum nostrum.
        Iusto quod eaque rerum reiciendis non animi tempore recusandae a ratione beatae consequuntur quasi facilis provident voluptate labore iste minus temporibus facere, repellendus quo nemo quibusdam. Error odio obcaecati ducimus?
        Laudantium dignissimos iure maiores ut sit natus? Nesciunt odit omnis asperiores suscipit consequatur perferendis officiis delectus pariatur! Itaque ab cupiditate et ex deserunt perspiciatis eius nihil minima. Non, nisi consectetur.
        Suscipit iusto maiores laudantium voluptate tempore consectetur deserunt laboriosam quia repellat ut dolore eos eligendi optio facilis sunt quasi sequi iste aperiam, eveniet accusamus harum sint! Earum dolorem culpa harum?
        Doloremque quasi accusantium, optio necessitatibus iste rem deleniti accusamus molestiae eligendi sit quo est nam pariatur possimus minus mollitia ipsum. Corrupti totam iste non possimus, repellat deleniti exercitationem porro quos?
        Aperiam debitis explicabo at perspiciatis alias obcaecati, quis tempora aliquid ratione consequuntur excepturi ipsa nam reiciendis veniam doloribus! Facere tenetur a sapiente sit tempora quia architecto, quae ut ipsum quod.
        Accusamus maiores ratione minus nam voluptate. Veniam eius iusto expedita nihil, consequatur quae vitae aliquam fugiat molestias ullam sunt iure eligendi suscipit ea. Eos minus ullam cumque dicta accusamus ipsum.
        Tempore iste amet sequi perspiciatis voluptas eligendi aliquid quam dolorum laborum at. Commodi dolores natus hic ipsum maiores! Sit, ipsa voluptatem magnam provident deleniti pariatur quidem a? Corrupti, vel alias!
        Non rem possimus placeat ex tempore neque tenetur animi doloribus assumenda eius hic laudantium alias dignissimos quae doloremque ut veritatis soluta voluptatem atque deleniti eligendi quam, adipisci a culpa? Voluptas.
        Culpa animi hic pariatur impedit aperiam, aspernatur quae, explicabo, totam facere ullam nulla praesentium. Rerum consectetur maiores ratione aspernatur, nihil esse delectus laudantium blanditiis, voluptatem asperiores iure libero consequatur laboriosam.
        Exercitationem laborum quod consequuntur, nihil voluptate ipsam quibusdam reiciendis hic magnam. Id cumque voluptatibus reiciendis vel possimus debitis harum eum perspiciatis, quam dolore est, cupiditate maxime ullam esse officia voluptate!
        Deleniti, aut officia. Omnis alias neque, ipsam aspernatur nam velit! Praesentium voluptate placeat in ipsa esse corporis soluta magnam quibusdam rerum atque, natus similique explicabo quae adipisci aperiam minima maxime.
        Necessitatibus, et. Eius nobis corporis ut non aut illum optio fuga! Corporis, maiores nemo voluptas deserunt voluptatum earum reprehenderit optio doloribus eos quia! Totam, necessitatibus ea! Molestias deserunt a possimus.
        Repellat ullam ad quaerat alias dolorum excepturi enim commodi non eius quae consectetur natus blanditiis distinctio libero eos ab, officia aspernatur! Tempore eaque corporis natus odio, eum repellendus earum iure?
        Architecto sequi veritatis aperiam corporis. Vel consequatur saepe sequi quibusdam quas expedita porro optio, cumque quasi aperiam iste fuga laborum. Expedita molestiae atque incidunt omnis saepe facilis, ratione quam nihil?
        Corrupti reiciendis debitis fugit atque consectetur sit, animi sed rem commodi magnam tempora natus repellat praesentium quasi veniam, dolorem at quam nam harum vitae quod assumenda necessitatibus? Ipsum, molestiae dolorem.
        Ipsum tempore earum eum, tenetur animi itaque dolor aspernatur quibusdam. Dignissimos consequuntur quae numquam repellendus, rerum adipisci expedita facere accusantium eveniet obcaecati eligendi non voluptatibus nesciunt tempora dolorum, laudantium ex?
        Officia modi labore nisi dignissimos quo blanditiis, laudantium quibusdam ut porro officiis eaque quam ad aut molestias voluptate, voluptates placeat. Molestias aliquam illum necessitatibus in architecto vel modi possimus. Perferendis?
        Quam ducimus mollitia dolore, quas eos laborum aliquam soluta atque maxime animi doloremque, ea, debitis voluptatum quisquam? Alias hic, repellendus, consequuntur, repudiandae ipsum fugiat laudantium nam libero excepturi possimus minus?
        Quaerat maxime omnis tenetur dicta quasi molestiae recusandae fugit perspiciatis aperiam corrupti, sapiente eos iure, dolorum ullam. Iure rem vel architecto labore facere perspiciatis eligendi consequuntur quidem laudantium laboriosam? Officia!
        Autem exercitationem numquam rerum distinctio minima, voluptatem esse quia animi a ratione, nam possimus voluptates, modi eius omnis id ullam tempore vero enim ipsa. Labore quidem atque odio corporis dolore!
        Quam, ducimus nobis expedita assumenda amet explicabo dolor? Vitae cumque ullam cupiditate adipisci quidem maxime ex, ipsum nostrum ipsa, quis cum aliquam necessitatibus unde possimus tempora quibusdam, suscipit architecto eos?
        Quia alias numquam animi porro deleniti cumque et harum repudiandae itaque! Modi cumque, sequi optio, ut amet tempore, qui illum rerum nesciunt nihil sed. Doloremque doloribus veniam totam sint sapiente?
        Officia porro suscipit molestiae voluptate sed cupiditate aliquid nostrum temporibus tenetur aut voluptates blanditiis, corporis eveniet animi maiores velit quis quaerat dignissimos expedita alias sunt necessitatibus? Quaerat illum ullam asperiores!
        Ab rerum excepturi ipsam eligendi nam sint, dignissimos delectus saepe recusandae iure nisi ullam architecto obcaecati, repudiandae eum laboriosam ratione blanditiis. Nostrum eius ipsa quidem sit deleniti dolorum, sequi blanditiis?
        Quam officiis ut adipisci fugit vero dicta doloribus in accusantium ab animi ipsum, ipsam ratione culpa commodi nulla facere blanditiis cupiditate possimus. Expedita, adipisci cum. Nesciunt possimus impedit consequatur pariatur.
        Dolore cum quaerat facere optio ipsum voluptatum deleniti ullam sunt debitis corporis aliquam officia quod aperiam at voluptates accusantium, nisi inventore natus animi officiis repudiandae ipsam dolores quae! Facere, ea!
        Quaerat, iusto dolorum voluptates pariatur quos ex, nemo dolor placeat aliquam maiores dicta perferendis mollitia earum aut. Dolores, sit alias ut nemo minima laudantium nobis, maiores quisquam maxime doloribus voluptatem.
        Delectus voluptatem harum nisi officia impedit rerum doloribus laborum autem ducimus quas magni possimus architecto aspernatur commodi numquam molestias ut, animi iure corporis ea dolorum reprehenderit modi veniam illum. Nulla.
        Natus explicabo repellendus non nobis dicta quibusdam tempore officiis saepe, distinctio aperiam iusto labore sequi dolore exercitationem eos reprehenderit harum? Fugit, nulla repudiandae iure illo perspiciatis voluptatibus deserunt nemo quaerat.
        Nihil nostrum voluptates dolorum impedit dolore explicabo corrupti eum est. Pariatur, ducimus quos? Sunt assumenda, ullam officia saepe exercitationem quidem praesentium corrupti itaque placeat quis minus repudiandae blanditiis, inventore harum.
        Ad rem inventore in assumenda architecto optio ipsum, amet vero nostrum eius quasi nulla, corrupti asperiores totam aspernatur delectus ullam tenetur quaerat eveniet dolorum reiciendis. Corrupti debitis blanditiis non dicta.
        Corrupti placeat perspiciatis saepe, eveniet nemo quo autem officia, porro facere doloremque error impedit libero dolor itaque atque deleniti! Nobis velit magnam exercitationem pariatur doloremque cum numquam odit dolor corporis?
        Obcaecati corporis maxime veritatis delectus temporibus esse animi ullam consectetur, quae ipsam incidunt illum deserunt iste? Ad culpa laborum quisquam necessitatibus esse laudantium consequuntur, officia ea tempora rerum fugiat quo?
        Odio dolores impedit exercitationem omnis, similique, quod quia ab error dolorum illum dolore quibusdam qui praesentium blanditiis quis magni quo hic est adipisci nam cumque optio deleniti culpa! Earum, vero?
        Repellat, qui ad! Sapiente adipisci praesentium perspiciatis! Id quia qui beatae ipsam. Sunt quasi natus deserunt error iusto nihil aspernatur eligendi, aliquam facere ex sed quae. Soluta provident nobis sapiente?
        Earum doloribus officiis sequi dolor nisi natus. Dolore minima sint harum officia culpa voluptatum adipisci perspiciatis? Repudiandae, fugit! Perferendis nam nulla quas eos reprehenderit laborum quod dolores dolor saepe similique?
        Dicta provident distinctio adipisci recusandae rem veniam et quia, blanditiis corrupti architecto animi doloremque cum cumque aperiam aspernatur ab numquam in dolorum minima ipsa sint repudiandae corporis. Ipsa, commodi quidem!
        Rem cumque assumenda fugit, laborum molestiae doloribus autem qui nostrum deleniti voluptatum nam neque dolorem optio perferendis iste tempore illo eos, officia architecto numquam odio veritatis minima incidunt. Aspernatur, nobis?
        Aut laudantium pariatur, velit impedit ut consequuntur quo perferendis voluptatum deserunt maiores in. Tempore, laborum. Perspiciatis quae nihil unde neque quos voluptas est natus, tenetur corporis odio officia esse! Soluta?</p>
    </main>
  );
};

export default Home;
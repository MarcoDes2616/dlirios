import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Parallax from '../components/Parallax';
import { setIsLoading } from '../store/slices/isLoading.slice';

const Home = () => {
  const pathname = useLocation()
  const isLoading = useSelector(state => state.isLoading)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);


  return (
    <main id="home">
      <div className='producto_destacado'>
        <div className='img_destacado'></div>
        <div className="fp_description">
          <h4 className="txtkalan">Producto en D%scuento<br /><span>Vinil Glitter</span></h4>
          {/* <p>Vinil Glitter importado. Medida standart (25 x 70cm). Con 10% de descuento hasta agotar stock</p> */}
          <h5 className="txtkalan">$3.00</h5>
          <div className="fp_btn">
            <a href="#discover"><div className="discover">Discover</div></a>
            <div className="add_cart" id="add_cart">AL CARRITO</div>
          </div>
        </div>
      </div>
      <Parallax />
      <div className='home_products'>
        <div className="filter_contain" id="filter_contain">
          <div className="all">
            <h4 id="ancla_menu_productos">Mostrar Todos</h4>
            <p>Todos los productos</p>
          </div>
          <div className="materiales">
            <div onClick={() => navigate("/products")} className="viniles">
              <h4>Viniles</h4>
              <p>Disponibles <span id="count_viniles"></span></p>
            </div>
            <div className="cintas">
              <h4>Cintas</h4>
              <p>Disponibles <span id="count_cintas"></span></p>
            </div>
            <div className="apliques">
              <h4>Apliques</h4>
              <p>Disponibles <span id="count_apliques"></span></p>
            </div>
            <div className="decorables">
              <h4>Decorables</h4>
              <p>Disponibles <span id="count_decorables"></span></p>
            </div>
          </div>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet error quo, amet eum sapiente cum odit necessitatibus et quidem nisi nulla blanditiis repellendus praesentium quos quibusdam. Dolores molestias eos repellat.
        Sequi, mollitia velit. Consequatur officia cum provident, dolor quam sequi doloremque. Ab, atque omnis vero, eligendi autem reiciendis accusamus ratione est error numquam ex id tempora neque, commodi quidem beatae.
        Nihil recusandae dicta vel alias rerum hic aperiam ipsa quis pariatur ea non amet impedit voluptas accusantium assumenda placeat delectus sed asperiores, fuga nostrum error possimus! Modi pariatur quae amet!
        Ullam eum nulla quia dicta ad assumenda veritatis facere. Cum voluptatum quia recusandae aperiam perferendis, officia obcaecati nisi unde eos aut ratione nam quas consequuntur corrupti nemo asperiores omnis quibusdam.
        Laboriosam voluptate doloribus ipsa minus doloremque? Libero fuga nisi blanditiis quibusdam, architecto nemo veritatis dolorum in quasi a quia debitis vitae nulla aperiam dolores. Repellat labore quia necessitatibus tempora facilis.
        Iusto alias qui, totam consequatur, perferendis, fugit corrupti animi officia amet omnis error eligendi obcaecati similique esse quae? Delectus ea molestiae ipsam, corporis illo fuga maxime repudiandae fugit vitae quos.
        Error eligendi velit molestiae hic vitae repellendus nobis at exercitationem sapiente eius minus quae, minima optio porro placeat expedita deleniti quam maxime laboriosam! Sapiente, sit consectetur consequatur reprehenderit asperiores ab?
        Ab nostrum harum enim doloribus id deleniti alias deserunt labore aperiam asperiores ipsa, exercitationem, voluptatibus voluptatem velit nisi veniam! Totam delectus nihil distinctio consequatur minima obcaecati ipsam blanditiis eos sint.
        Tempore quo recusandae rerum dolorem dignissimos? Ex tempore numquam architecto beatae, eaque adipisci deleniti molestias perspiciatis mollitia molestiae, doloremque amet sunt magni. Fugiat nihil ab eveniet, a rem incidunt atque.
        Corrupti in quaerat, vitae temporibus obcaecati amet magnam minima. Voluptas voluptates, architecto quis ducimus enim hic at unde animi sapiente dolorem incidunt fugit repudiandae nisi cumque, minus non! Doloremque, tempore!
        Maxime sit, delectus sequi nemo officiis, quos tempora blanditiis, amet modi quam vitae magnam? Tempore sunt itaque dignissimos voluptate, consequuntur eligendi quibusdam fugit ipsam exercitationem eos saepe placeat ab minus.
        Necessitatibus at omnis accusantium hic quo corporis minus ratione dolor, asperiores obcaecati similique, autem mollitia placeat maxime vero explicabo suscipit blanditiis repellendus labore dolore. Repudiandae suscipit necessitatibus veritatis reprehenderit accusantium.
        Voluptates facere quod dicta laudantium beatae vitae deserunt atque amet eveniet pariatur obcaecati quos, quia nulla nostrum expedita voluptatem perferendis tempora. Praesentium aperiam cum tempora accusantium similique, culpa perspiciatis at?
        Consectetur, natus nisi quibusdam quia, animi suscipit, soluta velit esse voluptatum mollitia culpa rem nobis fugiat cumque sunt quod? Ex tenetur officiis hic atque sit architecto ipsam quas eos consequatur?
        Recusandae eveniet officiis perspiciatis rerum modi neque explicabo voluptatum corporis exercitationem? Esse molestias quisquam quasi architecto? Voluptates, error at facere nesciunt vitae quis aperiam, veniam autem consequatur ex eligendi fugit.
        At aperiam suscipit aliquid ducimus, fugit ea. Eius libero laboriosam vitae officia cumque tempore quasi eligendi atque voluptate consequatur? Aut distinctio odit sed repellat. Officia maiores nostrum qui voluptatum ab.
        Reiciendis accusamus earum ipsa temporibus sunt beatae illo, quam maxime fugiat necessitatibus. Sint aliquam illo unde assumenda iusto quod, illum laboriosam beatae perferendis velit, debitis porro necessitatibus praesentium tempore vel.
        Porro necessitatibus eveniet reiciendis quasi nulla eos temporibus suscipit quia officiis nostrum ipsa aliquid explicabo doloribus, distinctio impedit, mollitia iure corporis ut, libero iusto asperiores magnam. Maiores illo rerum laborum?
        Iusto, quos quisquam deserunt soluta inventore excepturi vitae culpa! Excepturi saepe eaque necessitatibus! Nihil velit, rem quos, modi consectetur laudantium corporis voluptate asperiores eum est accusamus quaerat commodi. In, rerum.
        Nihil ullam quisquam expedita aliquid error magnam consequuntur, eius porro voluptatem architecto temporibus enim possimus odit voluptate a velit dolor, et eaque. Nam totam voluptatibus iusto veritatis aperiam illum maxime.
        Sed quas eligendi aliquam culpa cumque error, nostrum necessitatibus voluptas at fugiat incidunt impedit molestiae doloribus modi. Quidem aliquid assumenda repudiandae accusamus et molestiae? Minima ut facilis earum laudantium laboriosam?
        Aspernatur provident corporis dolorum, voluptatum voluptates nemo ea vero? Quasi quis, nulla delectus laudantium rerum in ipsam. Molestias ab, aut accusantium in tempore, architecto repellendus, veniam eius consequatur ut labore.
        Molestias suscipit maiores dolorum qui similique, voluptate nulla. Est hic eveniet, blanditiis consequatur voluptas aperiam provident placeat consequuntur ducimus qui cumque nemo sapiente ipsa. Nobis deleniti nostrum iusto deserunt dicta.
        Quod, a unde est, cumque sed placeat fugit magni quisquam aut debitis eligendi voluptatum iure ab ratione nesciunt. Voluptatibus cumque perferendis voluptas quidem temporibus, numquam voluptatem eum nesciunt accusamus omnis.
        Asperiores eos temporibus quod placeat eligendi eaque minima consequuntur consectetur odio officiis atque similique nesciunt, sit laborum amet. Possimus minima repudiandae, facere error soluta nesciunt a fugit vitae cumque quidem!
        Id quae ab vero corrupti dolores? Minima, eveniet! Dolorem nobis tempora repudiandae quaerat, officia quas. Aliquam sint delectus beatae veritatis deserunt unde itaque eaque consequatur vitae perspiciatis iusto, explicabo voluptates!
        Quos deleniti nihil voluptates ab, vel cumque illo aut necessitatibus! Blanditiis necessitatibus amet at natus! Soluta voluptatem doloribus quod at. Laboriosam dicta, laborum aut maxime id assumenda. Amet, velit harum.
        Amet sed laborum enim unde sit praesentium illo. Dolorem blanditiis est doloremque quaerat rem voluptates itaque sunt. A rem fuga iusto sit illum. Eum deserunt quibusdam dolores exercitationem temporibus vel?
        Excepturi amet sed maxime libero id vel corrupti dolores ex deleniti consequuntur consequatur fuga dolor atque illum adipisci quisquam perspiciatis, nam voluptas, nemo laboriosam ea, iure modi. Nulla, laborum cum.
        Reprehenderit saepe odit reiciendis. Odit, fuga tenetur deserunt architecto consequuntur maiores quae minima blanditiis nemo eos impedit magni repellat recusandae exercitationem quisquam sint commodi pariatur, a obcaecati harum ad aspernatur!</p>
      </div>
    </main>
  );
};

export default Home;
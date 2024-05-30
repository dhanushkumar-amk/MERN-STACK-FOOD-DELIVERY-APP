import './ExploreMenu.css';import {menu_list} from '../../assets/frontend_assets/assets';
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div
      className='explore-menu'
      id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Choose from diverse menu featuring a delectable array of dishes, our
        mission is to Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Nihil omnis doloribus quidem temporibus expedita praesentium.
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? 'All' : item.menu_name
                )
              }
              key={index}
              className='explore-item-menu-list'>
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt='menu image'
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

import './category-list.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const CategoryList = ({categories}) => {

    return(
        <div className="categories-container">
            {/* <h1>Hello World!</h1> */}
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))};
        </div>
    );
}

export default CategoryList;
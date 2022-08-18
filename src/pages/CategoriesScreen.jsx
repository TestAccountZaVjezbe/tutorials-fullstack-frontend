import { useNavigate  } from "react-router-dom";
import { Button } from "@mui/material";

const categories = [
    {
        "_id" : "62ed61ae08da1d35c104c8cd",
        "name" : "Jelo",
        "subCategories": [
            {
                "_id" : "62ed6bf71ebb5daf407170c2",
                "name" : "Dorucak",
                "categoryId" : "62ed61ae08da1d35c104c8cd",
                "__v" : 0
            },
            {
                "_id" : "62ed6bf71ebb5daf407170c1",
                "name" : "Topla jela",
                "categoryId" : "62ed61ae08da1d35c104c8cd",
                "__v" : 0
            }
        ],
        "__v" : 0
    },
    {
        "_id" : "62ed6416d48dc7fbaea97f8b",
        "name" : "Pice",
        "subCategories": [],
        "__v" : 0
    }
]
const CategoriesScreen = () => {
    const navigate = useNavigate();
    const editCategoryScren = (id) => {
        navigate(id);
    }

    const editSubCategoryScreen = (id) => {
        navigate(`../subcategories/${id}`, { replace: true });
    }
    return (
        <div>
            {categories.map(el => <div style={{ width: '200px',  height: '200px', marginBottom: '20px', background: 'red'}} key={el._id}>
                <div>
                    {el.name}
                </div>
                <div>
                    <Button sx={{ background: 'white'}} onClick={() => editCategoryScren(el._id)}>Edit</Button>
                    <Button sx={{ background: 'white'}}>Delete</Button>
                    -----------------------------------------------------------------
                </div>
                <div>
                    {el.subCategories.map(e => <div key={e._id}>
                        {e.name}
                        <Button sx={{ background: 'white'}} onClick={() => editSubCategoryScreen(e._id)}>Edit</Button>
                    </div>)}
                </div>  
            </div>)}
        </div>
    );
}

export default CategoriesScreen;
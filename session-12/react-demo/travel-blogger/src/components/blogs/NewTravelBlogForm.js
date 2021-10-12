import {useRef} from 'react'
import Card from '../ui/Card'

import classes from "./NewTravelBlogForm.module.css";


const NewTravelBlogForm = () => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const cityInputRef = useRef();
    const descriptionRef = useRef();

    const submitHandler = (event) => {
        // prevent refresh on submit
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImageUrl = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        const newTravelBlog = {
            title: enteredTitle,
            image: enteredImageUrl,
            address: enteredAddress,
            city: enteredCity,
            description: enteredDescription,
        }

        console.log(newTravelBlog);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" required ref={titleInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Image</label>
                    <input type="turl" id="image" required ref={imageInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required ref={addressInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" required ref={cityInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows="5" ref={descriptionRef}></textarea>
                </div>

                <div className={classes.actions}>
          <button>Add Blog</button>
        </div>
            </form>
        </Card>
    );
};

export default NewTravelBlogForm;

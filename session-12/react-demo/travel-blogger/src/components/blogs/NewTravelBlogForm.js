import React from 'react'
import Card from '../ui/Card'

import classes from "./NewTravelBlogForm.module.css";


const NewTravelBlogForm = () => {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title"></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Image</label>
                    <input type="turl" id="image"></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address"></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city"></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows="5"></textarea>
                </div>
            </form>
        </Card>
    );
};

export default NewTravelBlogForm;

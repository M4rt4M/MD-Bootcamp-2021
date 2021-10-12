import { useState, useEffect} from "react";
import TravelBlogList from "../components/blogs/TravelBlogList";

/*const BLOG_DATA = [
    {
        id: 1,
        title: "This is my first trip to Paris",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1600px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        address: "Tour Saint-Jacques",
        city: "Paris",
        description: "This place was so romantic!",
    },
    {
        id: 2,
        title: "This is my first trip to Marina Bay Sands",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Marina_Bay_Sands_in_the_evening_-_20101120.jpg/2560px-Marina_Bay_Sands_in_the_evening_-_20101120.jpg",
        address: "Marina Bay Sands",
        city: "Singapore",
        description: "This place was ace!",
      },
]; */

const AllTravelBlogs = () => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ travelBlogs, setTravelBlogs] = useState([]);

  useEffect(() => {
      const apiUrl = process.env.REACT_APP_TRAVEL_API_URL;
      fetch(apiUrl)
        .then(response => {
          return response.json();

        })
        .then((data) => {
          const travelBlogs = [];
          
          for (const key in data) {
            const travelBlog = {
              id: key,
              ...data[key],
            }

            travelBlogs.push(travelBlog);
          }
          setIsLoading(false);
          setTravelBlogs(travelBlogs);
        });
  }, [])

    if (isLoading) {
      return (
        <section>Loading...</section>
      );
    };

    return (
      <section>
        <h1>All Travel Blogs</h1>
  
        <TravelBlogList blogs={travelBlogs} /> {/* this takes data from the database*/}
        {/* <TravelBlogList blogs={BLOG_DATA} /> 
        //^this takes data from the object in this file*/}
      </section>
    );
  };
  
  export default AllTravelBlogs;
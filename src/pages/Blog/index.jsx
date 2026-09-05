import { useState } from "react";
import { NavLink } from "react-router-dom";

import blogData from "../../data/blogData"

import "./Blog.css";

function Blog(){

    const [searchQuery, setSearchQuery] = useState("")

    const [activeCategory, setActiveCategory] = useState("all");

    const [sortOrder, setSortOrder] = useState("newest");

     const categories = [
        {
            label: "All",
            value: "all",
        },
        {
            label: "Branding",
            value: "branding",
        },
        {
            label: "Graphic Design",
            value: "graphic-design",
        },
        {
            label: "Web Design",
            value: "web-design",
        },
        {
            label: "Marketing",
            value: "marketing",
        },
        {
            label: "Technology",
            value: "technology",
        },
    ];


/* ========================================
   Search + Category Filter
======================================== */


    const filteredBlogs = blogData.filter((blog)=>{

        const searchTerm = searchQuery
        .trim()
        .toLowerCase()


        const matchesSearch =
            blog.title.toLowerCase().includes(searchTerm) ||
            blog.excerpt.toLowerCase().includes(searchTerm) ||
            blog.categoryLabel.toLowerCase().includes(searchTerm);

        
        const matchesCategory =
            activeCategory === "all" ||
            blog.category === activeCategory;

            return matchesSearch && matchesCategory

    })


/* ========================================
   Sort
======================================== */

        const sortedBlogs = [...filteredBlogs].sort(
            (a, b) =>{

                const dateA = new Date(a.publishedAt);
                const dateB = new Date(b.publishedAt);

                return sortOrder === "newest"
                ? dateB - dateA
                : dateA - dateB;
            }
        )

    return(
        <>
            <main className="blog-page">

            {/* ========================================
                Blog Hero
            ======================================== */}

                <section className="blog-hero">

                    <div className="container">

                        <div className="blog-hero-content">

                            <p className="section-eyebrow">
                                TechLogex Insights
                            </p>

                            <h1>
                                Ideas That
                                <span>Move Businesses Forward.</span>
                            </h1>

                            <p>
                                Explore practical insights about branding,
                                design, technology, and marketing to help
                                your business grow.
                            </p>
                        </div>
                    </div>
                </section>


            {/* ========================================
                Blog Content
            ======================================== */}

            <section className="blog-content">

                <div className="container">


                    {/* ========================================
                    Blog Search
                    ======================================== */}

                    <div className="blog-search">

                        <label htmlFor="blog-search-input">
                            Search our articles
                        </label>

                        <div className="blog-search-box">
                             <i
                                className="bi bi-search"
                                aria-hidden="true"
                            ></i>

                            <input 
                                id="blog-search-input"
                                type="search"
                                placeholder="search blogs...."
                                value={searchQuery}
                                onChange={(event)=>{
                                    setSearchQuery(event.target.value)
                                }}
                            />

                            {searchQuery && (

                                <button
                                    type="button"
                                    className="blog-search-clear"
                                    aria-label="Clear search"
                                    onClick={()=> setSearchQuery("")}
                                >
                                    <i
                                        className="bi bi-x-lg"
                                        aria-hidden="true"
                                    ></i>

                                </button>
                            )}
                        </div>
                    </div>



                    {/* Filters + Sorting */}


                    <div className="blog-controls">

                        {/* Categories */}

                        <div className="blog-categories" aria-label="Blog categories">

                            {categories.map((category)=>(

                                <button
                                    key={category.value}
                                    type="button"
                                    className={
                                        activeCategory === category.value
                                            ? "blog-category active"
                                            : "blog-category"
                                    }
                                    
                                    onClick={()=>setActiveCategory(
                                        category.value
                                    )}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>

                        {/* Sort */}

                        <div className="blog-sort">

                        <label htmlFor="blog-sort">
                                Sort by
                        </label>

                        <select
                            id="blog-sort"
                            value={sortOrder}
                            onChange={(event)=>setSortOrder(
                                event.target.value
                            )}
                        >
                            <option value="newest">
                                Newest
                            </option>

                            <option value="oldest">
                                Oldest
                            </option>
                        </select>
                    </div>
                </div>

                {/* Blog Grid */}


                <div className="row g-4">
                            
                    {sortedBlogs.length > 0 ? (
                     sortedBlogs.map((blog)=>(

                        <div className="col-md-6 col-lg-4" key={blog.id}>

                            <article className="blog-card">

                                {/* Image */}

                            <div className="blog-card-image">

                            
                                <img 
                                    src={blog.image}
                                    alt={blog.title}
                                />
                            </div>

                            {/* Content */}

                            <div className="blog-card-content">

                                <div className="blog-card-meta">

                                    <span>{blog.categoryLabel}</span>

                                    <span>
                                        {new Date(
                                            blog.publishedAt
                                            ).toLocaleDateString(
                                                "en-US",
                                                    {
                                                        month: "short",
                                                        day: "numeric",
                                                        year: "numeric",
                                                    }
                                                )}
                                    </span>
                                </div>

                                <h2>{blog.title}</h2>

                                <p>{blog.excerpt}</p> 


                            {/* Reading information */}
                            
                            <div className="blog-card-stats">
                                <span>
                                    <i
                                        className="bi bi-clock"
                                        aria-hidden="true"
                                    ></i>

                                    {blog.readTime} min read
                                </span>

                                <span>
                                    <i
                                        className="bi bi-eye"
                                        aria-hidden = "true"
                                    >
                                        {blog.views.toLocaleString()}
                                    </i>
                                </span>

                                <span>
                                    <i
                                        className="bi bi-star-fill"
                                        aria-hidden="true"
                                    >
                                        {blog.rating}
                                    </i>
                                </span>
                            </div>              
                            
                            {/* Read Article */}

                            <NavLink
                                to={`/blog/${blog.slug}`}
                                className="blog-card-link"

                            >
                                Read Article
                                <span aria-hidden="true">
                                    →
                                </span>
                            </NavLink>



                            </div>
                            </article>
                        </div>
                    
                        ))

                    ) : (

                        <div className="col-12">
                            <div className="blog-no-results">

                                <div className="blog-no-results-icon">
                                    <i
                                        className="bi bi-search"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <h2>No articles found</h2>

                                <p>
                                    We couldn't find any articles matching
                                    your search. Try a different keyword.
                                </p>

                                <button
                                    type="button"
                                    className="blog-clear-search"
                                    onClick={() => {
                                        setSearchQuery("");
                                        setActiveCategory("all");
                                    }}
                                >
                                    Clear Search
                                </button>
                            </div>
                        </div>

                    )}
                </div>

                </div>
                


            </section>
            </main>
        </>
    )
}

export default Blog;
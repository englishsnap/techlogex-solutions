import {useParams, Navigate, NavLink} from "react-router-dom";

import { useEffect, useState } from "react";


import blogData from "../../data/blogData";

import "./BlogDetail.css";


function BlogDetail(){

    const { slug } = useParams();

    const [selectedRating, setSelectedRating] = useState(0);

    const [hoverRating, setHoverRating] = useState(0);

    const [ratingSubmitted, setRatingSubmitted] = useState(false);

    const [viewCount, setViewCount] = useState(null);

    /*
        Find the article that matches
        the URL slug.
    */

    const blog = blogData.find(
        (item)=> item.slug === slug
    );



    useEffect(() => {

        if (!blog) {
            return;
        }


        const storageKey =
            "techlogex-viewed-articles";


        const storedViews =
            sessionStorage.getItem(storageKey);


        const viewedArticles =
            storedViews
                ? JSON.parse(storedViews)
                : [];


        const alreadyViewed =
            viewedArticles.includes(blog.id);


        if (alreadyViewed) {

            setViewCount(blog.views + 1);

            return;
        }


        // First visit to this article
        const newViewCount =
            blog.views + 1;


        setViewCount(newViewCount);


        const updatedViewedArticles = [
            ...viewedArticles,
            blog.id
        ];


        sessionStorage.setItem(
            storageKey,
            JSON.stringify(
                updatedViewedArticles
            )
        );


    }, [blog]);

     /*
        If the article doesn't exist,
        return the user to the Blog page.
    */

    if(!blog){
        return <Navigate to="/blog" replace />
    }





    const formattedDate = new Date(
        blog.publishedAt
    ).toLocaleDateString(
        "en-US",
        {
            month: "long",
            day: "numeric",
            year: "numeric",
        }
    );


    return(
        <main className="blog-detail">
            
            {/* ========================================
                Article Hero
            ======================================== */}

            <section className="blog-detail-hero">

                <div className="container">

                    <div className="blog-detail-hero-content">

                        {/* Back to Blog */}

                        <NavLink
                            to="/blog"
                            className="blog-detail-back"
                        >
                            <span aria-hidden="true">
                                ←
                            </span>
                            Back to Blog
                        </NavLink>

                        {/* Category */}

                        <p className="section-eyebrow">
                            {blog.categoryLabel}
                        </p>

                        {/* Title */}

                        <h1>{blog.title}</h1>

                        {/* Excerpt */}

                        <p className="blog-detail-excerpt">
                            {blog.excerpt}
                        </p>

                        {/* Article Meta */}

                        <div className="blog-detail-meta">

                            <span>By {blog.author}</span>

                            <span aria-hidden="true">•</span>

                            <span>{formattedDate}</span>

                            <span aria-hidden="true">•</span>

                            <span>{blog.readTime}</span> min read
                        </div>

                        {/* Rating + Views */}

                        <div className="blog-detail-stats">

                            <span>
                                <i
                                    className="bi bi-star-fill"
                                    aria-hidden="true"
                                ></i>

                                {blog.rating}

                                <small>({blog.ratingCount} ratings)</small>
                            </span>

                            <span>
                                <i
                                    className="bi bi-eye"
                                    aria-hidden="true"
                                ></i>

                                {viewCount !== null
                                    ? viewCount.toLocaleString()
                                    : blog.views.toLocaleString()
                                }

                                <small>reads</small>
                            </span>
                        </div>
                    </div>
                </div>
            </section>


            {/* ========================================
                Featured Image
            ======================================== */}


            <section className="blog-detail-image-section">

                <div className="container">

                    <div className="blog-detail-image">

                        <img 
                            src={blog.image}
                            alt={blog.title}
                        />
                    </div>
                </div>
            </section>

            {/* ========================================
                Article Content
            ======================================== */}

            <section className="blog-detail-content">

                <div className="container">

                    <div className="blog-detail-layout">

                        {/* Article */}

                        <article className="blog-article">

                            {blog.content.map(
                                (block, index)=>{

                                    if(block.type === "heading"){
                                        return(
                                            <h2 key={index}>
                                                {block.text}
                                            </h2>
                                        );
                                    }

                                    return(
                                        <p key={index}>
                                            {block.text}
                                        </p>
                                    )
                                }
                            )}

                
                        </article>


                        {/* Sidebar */}


                        <aside className="blog-detail-sidebar">

                            <div className="blog-sidebar-card">

                                <p className="section-eyebrow">
                                    Article Information
                                </p>

                                <div className="blog-sidebar-item">

                                    <span>
                                        Category
                                    </span>

                                    <strong>
                                        {blog.categoryLabel}
                                    </strong>
                                </div>

                                <div className="blog-sidebar-item">

                                    <span>Published</span>

                                    <strong>
                                        {formattedDate}
                                    </strong>
                                </div>

                                <div className="blog-sidebar-item">

                                    <span>Reading Time</span>

                                    <strong>
                                        {blog.readTime} minutes
                                    </strong>
                                </div>

                                <div className="blog-sidebar-item">

                                    <span>Rating</span>

                                    <strong>
                                        ★ {blog.rating}
                                    </strong>
                                </div>
                            </div>

                            {/* Sidebar CTA */}

                            <div className="blog-sidebar-cta">

                                <h1>Need Help With Your Brand?</h1>

                                <p>
                                    Let's discuss how
                                    TechLogex Solutions can
                                    help your business grow.
                                </p>

                                <NavLink
                                    to="/contact"
                                    
                                >
                                    Let's Talk
                                    <span aria-hidden="true">
                                        →
                                    </span>
                                </NavLink>
                            </div>

                        </aside>
                    </div>
                </div>
            </section>

             {/* ========================================
                Rating Section
            ======================================== */}

            {/* <section className="blog-rating-section">

                <div className="container">

                    <div className="blog-rating-box">

                        <p className="section-eyebrow">
                            Share Your Opinion
                        </p>

                        <h2>
                            How useful was this article?
                        </h2>

                        <div className="blog-rating-stars" aria-label="Article rating">

                            <button
                                type="button"
                                aria-label="Rate 1 star"
                            >
                                <i
                                    className="bi bi-star"
                                    aria-hidden="true"
                                ></i>
                            </button>

                            <button
                                type="button"
                                aria-label="Rate 2 star"
                            >
                                <i
                                    className="bi bi-star"
                                    aria-hidden="true"
                                ></i>
                            </button>

                            <button
                                type="button"
                                aria-label="Rate 3 star"
                            >
                                <i
                                    className="bi bi-star"
                                    aria-hidden="true"
                                ></i>
                            </button>

                            <button
                                type="button"
                                aria-label="Rate 4 star"
                            >
                                <i
                                    className="bi bi-star"
                                    aria-hidden="true"
                                ></i>
                            </button>

                            <button
                                type="button"
                                aria-label="Rate 5 star"
                            >
                                <i
                                    className="bi bi-star"
                                    aria-hidden="true"
                                ></i>
                            </button>

                        </div>

                        <p className="blog-rating-note">
                            Your rating will help us improve
                            future articles.
                        </p>

                    </div>
                </div>
            </section> */}


            {/* ========================================
                Interactive Rating
            ======================================== */}

            <section className="blog-rating-section">

                <div className="container">

                    <div className="blog-rating-box">

                        <p className="section-eyebrow">
                            Share Your Opinion
                        </p>

                        <h2>
                            How useful was this article?
                        </h2>


                        {!ratingSubmitted ? (

                            <>

                                <div
                                    className="blog-rating-stars"
                                    onMouseLeave={() =>
                                        setHoverRating(0)
                                    }
                                    aria-label="Rate this article"
                                >

                                    {[1, 2, 3, 4, 5].map(
                                        (star) => {

                                            const isActive =
                                                star <=
                                                (hoverRating ||
                                                    selectedRating);

                                            return (

                                                <button
                                                    key={star}
                                                    type="button"
                                                    aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                                                    className={
                                                        isActive
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onMouseEnter={() =>
                                                        setHoverRating(star)
                                                    }
                                                    onFocus={() =>
                                                        setHoverRating(star)
                                                    }
                                                    onBlur={() =>
                                                        setHoverRating(0)
                                                    }
                                                    onClick={() => {
                                                        setSelectedRating(
                                                            star
                                                        );

                                                        setRatingSubmitted(
                                                            true
                                                        );
                                                    }}
                                                >

                                                    <i
                                                        className={
                                                            isActive
                                                                ? "bi bi-star-fill"
                                                                : "bi bi-star"
                                                        }
                                                        aria-hidden="true"
                                                    ></i>

                                                </button>

                                            );
                                        }
                                    )}

                                </div>


                                <p className="blog-rating-note">

                                    {hoverRating > 0
                                        ? `You are rating this article ${hoverRating} out of 5.`
                                        : "Select a rating from 1 to 5 stars."
                                    }

                                </p>

                            </>

                        ) : (

                            <div className="blog-rating-success">

                                <div className="blog-rating-success-icon">

                                    <i
                                        className="bi bi-check-lg"
                                        aria-hidden="true"
                                    ></i>

                                </div>


                                <h3>
                                    Thank you for your feedback!
                                </h3>


                                <div className="blog-rating-success-stars">

                                    {[1, 2, 3, 4, 5].map(
                                        (star) => (

                                            <i
                                                key={star}
                                                className={
                                                    star <= selectedRating
                                                        ? "bi bi-star-fill"
                                                        : "bi bi-star"
                                                }
                                                aria-hidden="true"
                                            ></i>

                                        )
                                    )}

                                </div>


                                <p>
                                    You rated this article{" "}
                                    <strong>
                                        {selectedRating}/5
                                    </strong>.
                                </p>

                            </div>

                        )}

                    </div>

                </div>

            </section>

             {/* ========================================
                CTA
            ======================================== */}


            <section className="blog-detail-cta">

                <div className="container">

                    <div className="blog-detail-cta-inner">

                        <p className="section-eyebrow">
                            Have a Project in Mind?
                        </p>

                        <h2>
                            Let's Turn Your Ideas
                            <span>Into Reality.</span>
                        </h2>

                        <p>
                            Have a question about branding,
                            design, technology, or marketing?
                            Let's talk about your project.
                        </p>

                        <NavLink
                            to="/contact"
                            className="blog-detail-cta-button"
                        >
                            Let's Talk
                            <span aria-hidden="true">
                                →
                            </span>
                        </NavLink>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default BlogDetail
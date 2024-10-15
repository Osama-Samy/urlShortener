URL Shortener

Overview

This project is a URL shortener service built with Express.js (Node.js). It allows users to shorten long URLs into concise, easy-to-share links. When users visit the shortened URL, they are automatically redirected to the original long URL. The service also stores URL mappings in a MongoDB database, ensuring persistent and efficient storage of all shortened URLs.

Features

Shorten URLs: Converts long URLs into short, user-friendly links.

Redirect: Automatically redirects users from the short URL to the original URL.

Database Storage: Stores the long-to-short URL mappings in a MongoDB database.

Validation: Ensures that only valid URLs are shortened.

API-based: Provides a RESTful API for creating and managing shortened URLs.


Tech Stack

Backend Framework: Express.js (Node.js)

Database: MongoDB (using Mongoose ODM)

Environment Management: dotenv for environment variables

API Testing: Postman for testing API endpoints


Getting Started

Prerequisites

Make sure you have the following installed:

Node.js (v12+)

MongoDB

Postman (optional, for testing API)
#By : Osama Samy

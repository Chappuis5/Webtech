
# Blogging application - ECE Webtech project

*presentation, introduction, ...*

## Production 

- Vercel URL: https://ece-webtech-pires-flament-forked.vercel.app/
- Supabase project URL: https://app.supabase.com/project/vujijoylnehftwrvbofx

## Usage

* Clone this repository, from your local machine:
  ```
  git clone ...
  cd ...
  ```
* Start the the application
  ```bash
  cd app
  # Install dependencies (use yarn or npm)
  npm install
  npm run build
  npm start
  ```

You don't need to start supabase as there is an online instance

## Authors

Evan Flament

Maxime Pires

## Tasks

**Project management:**

* Naming convention   
Respected: 2/2
* Project structure   
Same as the course: 2/2
* Git   
Good commits: 2/2
* Code quality   
Many components, separated functions: 4/4
* Design, UX, and content
Good ideas but needed more time: 3/4

**Application development:**

* Home page   
Classic: 2/2
* Login and profile page   
Many features: 4/4
* New articles creation   
Only seeable by signed users, markdown editor, but only title and content: 5/6
* New comment creation
Only seeable by signed users, simple good looking form: 4/4
* Resource access control
All the database has RLS: 4/4
* Article modification
Only seeable by author, could be more pretty: 4/4
* Article removal   
Can remove articles, started a draft system but we had not the time to finish it: 2/2
* Comment modification   
Inlined: 2/2
* Comment removal   
Inlined with the edition: 2/2
* Account settings   
On profile page, can modify all the informations and some are active: 4/4
* WYSIWYG integration   
Markdown editor: 2/2
* Gravatar integration   
Gravatar fetched: 2/2
* Light/dark theme   
Done: 2/2
* Accent color selection   
Done, could be more used: 3/4

## Bonus

* Feedback messages
When successing to do something or failing something, a pop-up appears at the bottom right and closes itself after 3 seconds: 4 points ? (it was difficult)
* Random background images
A setting in the profile page, can set the background to a random image: 2 points ? (it is not well integrated)
* Animated icons
All icons are animated when the mouse is hover: 1 points ? (it was very long to code)
* Profile persist
Used to retrieve some informations about the profile, when signing in a profile is created in the database with some usefull informations (like the settings)


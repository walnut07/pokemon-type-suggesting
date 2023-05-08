# pokemon-type-suggesting
When fighting in a Pokemon battle, use this app to know the advantageous types to your opponent!

## Tech Stack
Created a frontend where users can input a pokemon name and see an advantageous pokemon type. Implemented CI/CD to GCP Cloud Build/Cloud Run with nginx and Docker. <br>
Production: https://pokemon-type-suggesting-hdyhszzhuq-uc.a.run.app/

## Architecture
The client-side server is deployed to GCP. A code push to the source code triggers Cloud Build and it deploys the app to Cloud Run.
![The architecture](https://user-images.githubusercontent.com/90857923/218310161-779661f9-d282-4534-9a93-6456c2d8c990.png)

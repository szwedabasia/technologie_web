from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Homepage"}

@app.get("/students")
async def create_student():
    return {"message": "Students list"}
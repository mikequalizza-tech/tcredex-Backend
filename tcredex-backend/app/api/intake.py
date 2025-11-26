from fastapi import APIRouter

router = APIRouter()

@router.get('/intake')
def get_intake():
    return {"intake": True}
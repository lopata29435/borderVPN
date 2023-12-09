from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import TextModelSerializer

@api_view(['POST'])
def process_post_request(request):
    if request.method == 'POST':
        # Сериализация данных из запроса
        serializer = TextModelSerializer(data=request.data)
        
        if serializer.is_valid():
            print(serializer)
            serializer.save()
            return Response({'status': 'success'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'status': 'error', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    return Response({'status': 'error', 'message': 'Invalid request method'}, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.pagination import PageNumberPagination

class LargeResultsSetPaginationMixin(PageNumberPagination):
    page_size = 1000
    page_size_query_param = 'page_size'
    max_page_size = 10000


class StandardResultsSetPaginationMixin(PageNumberPagination):
    """
    Return 20 records in a single page & max page number is up to 1000
    """
    # page_size = 20
    page_size = 100 # just to simplify the pagination-nav-numbers
    page_size_query_param = 'page_size' # 'page_size' can be dynamic through passing the query-param alongside from the frontend-get-method
    max_page_size = 1000    # Define a max_page_size that will be accepted sent from the query param of the frontend-get-method 

    # # CUSTOM PAGINATED RESPONSE
    # def get_paginated_response(self, data):
    #     return Response({
    #         'count': self.page.paginator.count,
    #         'next': self.get_next_link(),
    #         'previous': self.get_previous_link(),
    #         'extra_data': {  # Add your extra data here
    #             'key': 'value',
    #             # Add more key-value pairs as needed
    #         },
    #         'results': data
    #     })
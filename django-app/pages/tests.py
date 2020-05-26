from django.test import TestCase
from django.urls import resolve
from pages.views import MainView


class IndexViewTest(TestCase):
    def test_root_url_resolves_to_index_page_view(self):
        found = resolve("/")
        self.assertEqual(found.func.view_class, MainView)

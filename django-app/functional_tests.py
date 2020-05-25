from selenium import webdriver
import unittest


class NewVisitorTest(unittest.TestCase):
    def setUp(self):
        self.browser = webdriver.Firefox()

    def tearDown(self):
        self.browser.quit()

    def test_can_write_chosen_destination(self):
        # Joanna wants to plan her holiday
        self.browser.get("http://localhost:8000")

        # She noticed the page title and header mention travel destination
        self.assertIn("Travel", self.browser.title)
        self.fail("Finish the test!")

        # She wants to look for a nice place to stay


if __name__ == "__main__":
    unittest.main(warnings="ignore")

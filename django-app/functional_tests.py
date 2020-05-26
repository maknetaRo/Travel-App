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

        # She wants to find a nice place to stay so she can write a name of the city

        # and she can see hotels there
        # she can see what monuments there are
        # she can see what restaurants there are
        # she can see other attriactions

        # she can check the weather there

        # she can add list of things she needs on her holiday
        # so she can add an item
        # she can edit the item
        # she can delete the item

        # when she creates account and comes back later she can see all the stuff


if __name__ == "__main__":
    unittest.main(warnings="ignore")

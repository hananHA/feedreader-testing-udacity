/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* First test suite: 'RSS Feeds' suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {

        /* 'are defined' tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* 'has a URL defined and is not empty' loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL defined and is not empty', function() {
            allFeeds.forEach(function(feed) {
                feedUrl = feed.url;
                expect(url).toBeDefined();
                expect(url.length).not.toBe(0);
            });
        });

        /* 'has a name defined and is not empty' loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name defined and is not empty', function() {
            allFeeds.forEach(function(feed) {
                feedName = feed.name;
                expect(name).toBeDefined();
                expect(name.length).not.toBe(0);
            });
        });
    });


    /* Second test suite: 'The Menu' suite. */
    describe('The Menu', function() {
        var $body = $('body');

        /* 'is hidden by default' ensures the menu element is
         * hidden by default by testing if it has the '.menu-hidden'
         * class.
         */
        it('is hidden by default', function() {
            expect($body.hasClass('menu-hidden')).toBe(true);
        });

        /* 'changes visibility when the menu icon is clicked' 
         * ensures the menu changes visibility when the menu icon is clicked.
         * This test have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('changes visibility when the menu icon is clicked', function() {
            var $menuIcon = $('.menu-icon-link');

            $menuIcon.click();
            expect($body.hasClass('menu-hidden')).toBe(false);

            $menuIcon.click();
            expect($body.hasClass('menu-hidden')).toBe(true);
        });
    });


    /* Third test suite: 'Initial Entries' suite. */
    describe('Initial Entries', function() {

        // ensures the data is loaded before each test
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* 'has at least a single .entry element after loadFeed is called' ensures
         * when the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('has at least a single .entry element after loadFeed is called', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });


    /* Fourth test suite: 'New Feed Selection' suite. */
    describe('New Feed Selection', function() {
        var $feedSelection;

        // load the feed before each test
        beforeEach(function(done) {
            loadFeed(0, function() {
                $feedSelection = $('.feed').html();
                loadFeed(1, function() {
                    done();
                });
            });
        });

        /* 'the content changes after a new feed is loaded' ensures 
         * when a new feed is loaded by the loadFeed function that the
         * content changes.
         */
        it('the content changes after a new feed is loaded', function(done) {
            var $newFeedSelection = $('.feed').html();
            expect($newFeedSelection).not.toBe($feedSelection);
            done();
        });
    });


}());

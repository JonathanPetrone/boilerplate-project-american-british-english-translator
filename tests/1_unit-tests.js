const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {
    suite("Translate to British English", function () {

        test("Translate Mangoes are my favorite fruit. to British English", function (done) {
            let AM_text = "Mangoes are my favorite fruit."
            assert.equal(
                translator.toBritishEnglish(AM_text)[0],
                "Mangoes are my favourite fruit."
            );
            done();
        });

        test("Translate I ate yogurt for breakfast. to British English", function (done) {
            let AM_text = "I ate yogurt for breakfast."
            assert.equal(
                translator.toBritishEnglish(AM_text)[0],
                "I ate yoghurt for breakfast."
            );
            done();
        });

        test("Translate We had a party at my friend's condo. to British English", function (done) {
            let AM_text = "We had a party at my friend's condo."
            assert.equal(
                translator.toBritishEnglish(AM_text)[0],
                "We had a party at my friend's flat."
            );
            done();
        });

        test("Translate Can you toss this in the trashcan for me? to British English", function (done) {
            let AM_text= "Can you toss this in the trashcan for me?"
            assert.equal(
                translator.toBritishEnglish(AM_text)[0],
                "Can you toss this in the bin for me?"
            );
            done();
        });

        test("Translate The parking lot was full. to British English", function (done) {
            let AM_text = "The parking lot was full."
            assert.equal(
                translator.toBritishEnglish(AM_text)[0],
                "The car park was full."
            );
            done();
        });

        test("Translate Like a high tech Rube Goldberg machine. to British English", function (done) {
            let AM_text = "Like a high tech Rube Goldberg machine."
            assert.equal(
                translator.toBritishEnglish(AM_text)[0],
                "Like a high tech Heath Robinson device."
            );
            done();
        });

        test("Translate To play hooky means to skip class or work. to British English", function (done) {
            let AM_text = "To play hooky means to skip class or work."
            assert.equal(
                translator.toBritishEnglish(AM_text)[0],
                "To bunk off means to skip class or work."
            );
            done();
        });

        test("Translate No Mr. Bond, I expect you to die. to British English", function (done) {
            let AM_text = "No Mr. Bond, I expect you to die."
            assert.equal(
                translator.toBritishEnglish(AM_text)[0],
                "No Mr Bond, I expect you to die."
            );
            done();
        });
        
        test("Translate Dr. Grosh will see you now. to British English", function (done) {
            let AM_text = "Dr. Grosh will see you now."
            assert.equal(
                translator.toBritishEnglish(AM_text)[0],
                "Dr Grosh will see you now."
            );
            done();
        });
        
        test("Translate Lunch is at 12:15 today. to British English", function (done) {
            let AM_text = "Lunch is at 12:15 today."
            assert.equal(
                translator.toBritishEnglish(AM_text)[0],
                "Lunch is at 12.15 today."
            );
            done();
          });
        });

    suite("Translate to American English", function () {
        test("Translate We watched the footie match for a while. to American English", function (done) {
            let BR_text = "We watched the footie match for a while."
            assert.equal(
                translator.toAmericanEnglish(BR_text)[0],
                "We watched the soccer match for a while."
            );
            done();
        });

        test("Translate Paracetamol takes up to an hour to work. to American English", function (done) {
            let BR_text = "Paracetamol takes up to an hour to work."
            assert.equal(
                translator.toAmericanEnglish(BR_text)[0],
                "Tylenol takes up to an hour to work."
            );
            done();
        });
        
        test("Translate First, caramelise the onions. to American English", function (done) {
            let BR_text = "First, caramelise the onions."
            assert.equal(
                translator.toAmericanEnglish(BR_text)[0],
                "First, caramelize the onions."
            );
            done();
        });

        test("Translate I spent the bank holiday at the funfair. to American English", function (done) {
            let BR_text = "I spent the bank holiday at the funfair."
            assert.equal(
                translator.toAmericanEnglish(BR_text)[0],
                "I spent the public holiday at the carnival."
            );
            done();
        });

        test("Translate I had a bicky then went to the chippy. to American English", function (done) {
            let BR_text = "I had a bicky then went to the chippy."
            assert.equal(
                translator.toAmericanEnglish(BR_text)[0],
                "I had a cookie then went to the fish-and-chip shop."
            );
            done();
        });

        test("Translate I've just got bits and bobs in my bum bag. to American English", function (done) {
            let BR_text = "I've just got bits and bobs in my bum bag."
            assert.equal(
                translator.toAmericanEnglish(BR_text)[0],
                "I've just got odds and ends in my fanny pack."
            );
            done();
        });

        test("Translate The car boot sale at Boxted Airfield was called off. to American English", function (done) {
            let BR_text = "The car boot sale at Boxted Airfield was called off."
            assert.equal(
                translator.toAmericanEnglish(BR_text)[0],
                "The swap meet at Boxted Airfield was called off."
            );
            done();
        });
        
        test("Translate Have you met Mrs Kalyani? to American English", function (done) {
            let BR_text = "Have you met Mrs Kalyani?"
            assert.equal(
                translator.toAmericanEnglish(BR_text)[0],
                "Have you met Mrs. Kalyani?"
            );
            done();
        });

        test("Translate Prof Joyner of King's College, London. to American English", function (done) {
            let BR_text = "Prof Joyner of King's College, London."
            assert.equal(
                translator.toAmericanEnglish(BR_text)[0],
                "Prof. Joyner of King's College, London."
            );
            done();
        });

        test("Translate Tea time is usually around 4 or 4.30. to American English", function (done) {
            let BR_text = "Tea time is usually around 4 or 4.30."
            assert.equal(
                translator.toAmericanEnglish(BR_text)[0],
                "Tea time is usually around 4 or 4:30."
            );
            done();
        });
    });

    suite("Rest of the tests for highlight", function () {
 
        test("Highlight translation in Mangoes are my favorite fruit.", function (done) {
            let AM_text = "Mangoes are my favorite fruit."
            assert.equal(
                translator.toBritishEnglish(AM_text)[1],
                'Mangoes are my <span class="highlight">favourite</span> fruit.'
            );
            done();
        });
        
        test("Highlight translation in I ate yogurt for breakfast.", function (done) {
            let AM_text = "I ate yogurt for breakfast."
            assert.equal(
                translator.toBritishEnglish(AM_text)[1],
                'I ate <span class="highlight">yoghurt</span> for breakfast.'
            );
            done();
        });

        test("Highlight translation in We watched the footie match for a while.", function (done) {
            let BR_text = "We watched the footie match for a while."
            assert.equal(
                translator.toAmericanEnglish(BR_text)[1],
                'We watched the <span class="highlight">soccer</span> match for a while.'
            );
            done();
        });
        
        test("Highlight translation in Paracetamol takes up to an hour to work.", function (done) {
            let BR_text = "Paracetamol takes up to an hour to work."
            assert.equal(
                translator.toAmericanEnglish(BR_text)[1],
                '<span class="highlight">Tylenol</span> takes up to an hour to work.'
            );
            done();
        });
    });
});

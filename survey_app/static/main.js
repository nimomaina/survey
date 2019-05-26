var selected

function dragOver(e) {
    if (isBefore(selected, e.target)) e.target.parentNode.insertBefore(selected, e.target)
    else e.target.parentNode.insertBefore(selected, e.target.nextSibling)
}

function dragEnd() {
    selected = null
}

function dragStart(e) {
    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/plain", null)
    selected = e.target
}

function isBefore(el1, el2) {
    var cur
    if (el2.parentNode === el1.parentNode) {
        for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
            if (cur === el2) return true
        }
    } else return false;
}

function validate() {
    var n1 = parseInt(document.getElementsByName('Number1')[0].value);
    var n2 = parseInt(document.getElementsByName('Number2')[0].value);
    var n3 = parseInt(document.getElementsByName('Number3')[0].value);
    var n4 = parseInt(document.getElementsByName('Number4')[0].value);
    var n4 = parseInt(document.getElementsByName('Number5')[0].value);

    if (n1 + n2 + n3 + n4 + n5 == 100) {
        return true;
    } else {
        alert("Sum is not 100");
        return false;
    }
}


(function () {
    function toJSONString(form) {
        var obj = {};
        var elements = form.querySelectorAll("input, li");
        for (var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var name = element.id;
            var value = element.value;

            if (name) {
                obj[name] = value;
            }
        }

        return JSON.stringify(obj);
    }

    document.addEventListener("DOMContentLoaded", function () {
        var form = document.getElementById("test");
        var output = document.getElementById("output");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var json = toJSONString(this);
            output.innerHTML = json;

        }, false);

    });

})();



// $(document).ready(function () {

//     $("#question1 button").click(function () {
//         $("#question2").show();
//         $("#question1").hide();
//     });

//     $("#question2 button").click(function () {
//         $("#question3").show();
//         $("#question2").hide();
//     });

//     $("#question3 button").click(function () {
//         $("#question4").show();
//         $("#question3").hide();
//     });

//     $("#question4 button").click(function () {
//         $("#question5").show();
//         $("#question4").hide();
//     });

//     $("#question5 button").click(function () {
//         $("#question6").show();
//         $("#question5").hide();
//     });


// var visibleDiv = 0;

// function showDiv() {
//     $('.panel-info:eq(' + visibleDiv + ')').show();
// }
// showDiv();

// function showNext() {
//     $('.panel-info').hide();
//     if (visibleDiv == $('.panel-info').length) {
//         visibleDiv = 0;
//     } else {
//         visibleDiv++;
//     }
//     showDiv();
// }
// });


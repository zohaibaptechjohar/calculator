function sum(){
        var mths = document.getElementById('maths');
        var phy = document.getElementById('phy');
        var chem = document.getElementById('chem');
        var isl = document.getElementById('Isl');
        var cmp = document.getElementById('Computer');
        
        var sumOfMarks = parseInt(mths.value) +
         parseInt(phy.value) + parseInt(chem.value) 
        + parseInt(cmp.value) + parseInt(isl.value);
        
        document.write("the Sum Of Marks are = "+sumOfMarks + "<br> total Marks = 500");
        var per = parseFloat(sumOfMarks/500 *100);
        document.write("the Percentage Of Marks are = "+per);
        
            }
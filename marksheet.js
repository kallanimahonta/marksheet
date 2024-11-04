//DOM Ready
$(function(){
    $('button').click(function(){
        alert('Ok');
        
        var name = $('#name-text').val();
        var roll = $('#roll-number').val();
        var clas = $('#class-text').val();
        var section = $('#section-text').val();
        
        // Mark
        var ban_mark = $('#ban-text').val();
        var eng_mark = $('#eng-text').val();
        var math_mark = $('#math-text').val();
        var phy_mark = $('#phy-text').val();
        var chem_mark = $('#chem-text').val();
        var bio_mark = $('#bio-text').val();


        // bangla calculate grade       
        if (ban_mark>=80 && ban_mark<=100) {
            var gp = 5.00;
            var grade = 'A+';
        } 
        else if (ban_mark>=70 && ban_mark<=79) {
            var gp = 4.00;
            var grade = 'A';
        } 
        else if (ban_mark>=60 && ban_mark<=69) {
            var gp = 3.50;
            var grade = 'A-';
        } 
        else if (ban_mark>=50 && ban_mark<=59) {
            var gp = 3.00;
            var grade = 'B';
        } 
        else if (ban_mark>=40 && ban_mark<=49) {
            var gp = 2.00;
            var grade = 'C';
        } 
        else if (ban_mark>=33 && ban_mark<=39) {
            var gp = 1.00;
            var grade = 'D';
        } 
        else {
            var gp = 0.00; 
            var grade = 'F';
        }

        // english calculate grade                           
        if (eng_mark>=80 && eng_mark<=100) {
            var gp_e = 5.00;
            var grade_e = 'A+';
        } 
        else if (eng_mark>=70 && eng_mark<=79) {
            var gp_e = 4.00;
            var grade_e = 'A';
        } 
        else if (eng_mark>=60 && eng_mark<=69) {
            var gp_e = 3.50;
            var grade_e = 'A-';
        } 
        else if (eng_mark>=50 && eng_mark<=59) {
            var gp_e = 3.00;
            var grade_e = 'B';
        } 
        else if (eng_mark>=40 && eng_mark<=49) {
            var gp_e = 2.00;
            var grade_e = 'C';
        } 
        else if (eng_mark>=33 && eng_mark<=39) {
            var gp_e = 1.00;
            var grade_e = 'D';
        } 
        else {
            var gp_e = 0.00; 
            var grade_e = 'F';
        }
         // math calculate grade                           
        if (math_mark>=80 && math_mark<=100) {
            var gp_m = 5.00;
            var grade_m = 'A+';
        } 
        
        else if (math_mark>=70 && math_mark<=79) {
            var gp_m = 4.00;
            var grade_m = 'A';
        } 
        else if (math_mark>=60 && math_mark<=69) {
            var gp_m = 3.50;
            var grade_m = 'A-';
        } 
        else if (math_mark>=50 && math_mark<=59) {
            var gp_m = 3.00;
            var grade_m = 'B';
        } 
        else if (math_mark>=40 && math_mark<=49) {
            var gp_m = 2.00;
            var grade_m = 'C';
        } 
        else if (math_mark>=33 && math_mark<=39) {
            var gp_m = 1.00;
            var grade_m= 'D';
        } 
        else {
            var gp_m = 0.00; 
            var grade_m = 'F';
        }
        
           // physics calculate grade                           
        if (phy_mark>=80 && phy_mark<=100) {
            var gp_py = 5.00;
            var grade_py = 'A+';
        } 
        
        else if (phy_mark>=70 && phy_mark<=79) {
            var gp_py = 4.00;
            var grade_py = 'A';
        } 
        else if (phy_mark>=60 && phy_mark<=69) {
            var gp_py = 3.50;
            var grade_py = 'A-';
        } 
        else if (phy_mark>=50 && phy_mark<=59) {
            var gp_py = 3.00;
            var grade_py = 'B';
        } 
        else if (phy_mark>=40 && phy_mark<=49) {
            var gp_py = 2.00;
            var grade_py = 'C';
        } 
        else if (phy_mark>=33 && phy_mark<=39) {
            var gp_py = 1.00;
            var grade_py= 'D';
        } 
        else {
            var gp_py = 0.00; 
            var grade_py = 'F';
        }
        // chemistry calculate grade                           
        if (chem_mark>=80 && chem_mark<=100) {
            var gp_ch = 5.00;
            var grade_ch = 'A+';
        } 
        else if (chem_mark>=70 && chem_mark<=79) {
            var gp_ch = 4.00;
            var grade_ch = 'A';
        } 
        else if (chem_mark>=60 && chem_mark<=69) {
            var gp_ch = 3.50;
            var grade_ch = 'A-';
        } 
        else if (chem_mark>=50 && chem_mark<=59) {
            var gp_ch = 3.00;
            var grade_ch = 'B';
        } 
        else if (chem_mark>=40 && chem_mark<=49) {
            var gp_ch = 2.00;
            var grade_ch = 'C';
        } 
        else if (chem_mark>=33 && chem_mark<=39) {
            var gp_ch = 1.00;
            var grade_ch = 'D';
        } 
        else {
            var gp_ch = 0.00; 
            var grade_ch = 'F';
        }
        // biology calculate grade                           
        if (bio_mark>=80 && bio_mark<=100) {
            var gp_b = 5.00;
            var grade_b = 'A+';
        } 
        else if (bio_mark>=70 && bio_mark<=79) {
            var gp_b = 4.00;
            var grade_b = 'A';
        } 
        else if (bio_mark>=60 && bio_mark<=69) {
            var gp_b = 3.50;
            var grade_b = 'A-';
        } 
        else if (bio_mark>=50 && bio_mark<=59) {
            var gp_b = 3.00;
            var grade_b = 'B';
        } 
        else if (bio_mark>=40 && bio_mark<=49) {
            var gp_b = 2.00;
            var grade_b = 'C';
        } 
        else if (bio_mark>=33 && bio_mark<=39) {
            var gp_b = 1.00;
            var grade_b = 'D';
        }
        else {
            var gp_b = 0.00; 
            var grade_b = 'F';
        }
  

        //alert(gp);
        
        $('#dis-name').text(name);
        $('#dis-roll').text(roll);
        $('#dis-class').text(clas);
        $('.dis-sec').text(section);

        $('#dis-ban').text(ban_mark);
        $('#dis-eng').text(eng_mark);
        $('#dis-math').text(math_mark);
        $('#dis-phy').text(phy_mark);
        $('#dis-chem').text(chem_mark);
        $('#dis-bio').text(bio_mark);

        // gp set bangla
        $('#dis-ban-gp').text(gp);
        $('#dis-ban-grade').text(grade);  
        
        // gp , garde set for english
        $('#dis-eng-gp').text(gp_e);
        $('#dis-eng-grade').text(grade_e); 
        
        //gp,grade set for mathmatics
        $('#dis-math-gp').text(gp_m);
        $('#dis-math-grade').text(grade_m);  
        //gp,grade set for physics
        $('#dis-phy-gp').text(gp_py);
        $('#dis-phy-grade').text(grade_py);  
        //gp,grade set for chemistry
        $('#dis-chem-gp').text(gp_ch);
        $('#dis-chem-grade').text(grade_ch);  
        //gp,grade set for biology
        $('#dis-bio-gp').text(gp_b);
        $('#dis-bio-grade').text(grade_b); 
       //set for gpa
        var gpa=(gp+gp_e+gp_m+gp_py+gp_ch+gp_b)/6;
       $('#dis-gpa').text(gpa.toFixed(1));      
        

    });
});
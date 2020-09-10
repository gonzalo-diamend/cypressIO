describe('Cuentas',function(){
    var a = 1+1
    var b= 2
    it('Suma', function(){
        expect(a==b).to.equal(false);
    })

    it('resta', function(){
        expect(a-b).to.equal(0);
    })

    it('resta', function(){
        expect(1-1).to.equal(0);
    })

    it('No igual', function(){
        expect(2-1).to.not.equal(0);
    })

    it('La verita', function(){
        expect(2==2).to.be.true;
    })

    it('False', function(){
        expect(2==1).to.be.false;
    })

    it('Exist', function(){
        expect(a).to.exist;
    })

    it('Menor que', function(){
        expect(a).to.be.lessThan(10);
    })

    it('Mayor que', function(){
        expect(25).to.be.greaterThan(10);
    })


})
function areaCirculo(){
	var r1,area;
	r1=formCirculo.raio.value;
	r1=parseFloat(r1);
	area=(r1*r1)*Math.PI;
	formCirculo.resultado.value=area.toFixed(2);

}
function areaTriangulo(){
	var b,h,area;
	b=formTriangulo.base.value;
	h=formTriangulo.altura.value;
	b=parseFloat(b);
	h=parseFloat(h);
	area=(b*h)/2;
	formTriangulo.resultado2.value=area.toFixed(2);

}
function areaCubo(){
	var a,area;
	a=formCubo.aresta.value;
	a=parseFloat(a);
	area=6*(a*a);
	formCubo.resultado3.value=area.toFixed(2);
}
function areaCilindro(){
	var r,h,area;
	r=formCilindro.raio2.value;
	h=formCilindro.altura.value;
	r=parseFloat(r);
	h=parseFloat(h);
	area=2*Math.PI*r*(r+h);
	formCilindro.resultado4.value=area.toFixed(2);
}
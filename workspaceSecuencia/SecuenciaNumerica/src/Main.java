import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.w3c.dom.ls.LSInput;


public class Main {

	public static void llenarListas(List<Integer> listNumeros,List<String> secuencia) {
		for (int i=0; i<=listNumeros.size(); i++){
			System.out.println(listNumeros.get(i));
			secuencia.add(listNumeros.get(i));
		}
		
	}
	
	public static void main(String[] args){
		List<Integer> numeros= Arrays.asList(0,1,2,3,4,5,6,7,8,9,10);
		List<Integer> secuencia1= Arrays.asList();
		List<Integer> secuencia2= Arrays.asList();
		List<Integer> secuencia3= Arrays.asList();
		ArrayList<String> secuenciaFinal = new ArrayList<String>();
		
		llenarListas(numeros, secuencia1);
		llenarListas(numeros, secuencia2);
		llenarListas(numeros, secuencia3);
		
		for (int i=0; i<=secuencia1.size();i++){
			for (int y=0; y<=secuencia2.size() ; y++){
				for (int z=0; z<=secuencia3.size(); z++){
				secuenciaFinal.add(String.valueOf(secuencia1.get(i))+" - "+String.valueOf(secuencia2.get(y))+" - "+String.valueOf(secuencia3.get(z)));
				}

			}
			
		}
		System.out.println(secuenciaFinal);
		System.out.println(secuenciaFinal.size());
	}

	
	
}



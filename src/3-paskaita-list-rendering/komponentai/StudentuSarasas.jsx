import { Studentas } from "./Studentas"
import { studentai } from '../duomenys/data';

export const StudentuSarasas = () => {

    // const zodziuArray = ['Asta', 'Saulius', 'Pranas', 'Kamile'];

    // const vardai = zodziuArray.map(vardas => {
    //     return <li>{vardas}</li>
    // })

    // const skaiciuArray = [ 6, 2, 8,  1, 9];

    // const skaiciai = skaiciuArray.map(skaicius => {
    //     return <li>{skaicius}</li>
    // })

    // const studentuSarasas = studentai.map((studentas) => {
    //   return <Studentas key={studentas.Id} studentas={studentas} />;
    // });

    // const isfiltruotasStudentuSarasas = studentai.filter(studentas => {
    //     return studentas.age > 22;
    // });

    // const filtruotoSarasoAtvaizdavimas = isfiltruotasStudentuSarasas.map(item => {
    //     return <Studentas key={item.Id} studentas={item} />
    // })

    const studentuKomanda = studentai
    .filter(student => {
        return student.team === "Studentai";
    })
    .map(student => {
        return <Studentas studentas={student} />
    })
                                              
    const studentaiVienas = studentuKomanda.map(student => {
        return <Studentas studentas={student} />
    })

    const moksleiviuKomanda = studentai.filter(student => {
        return student.team === "Moksleiviai";
    })

    return (
        <>
        <h2>Studentai</h2>
        <ul>
            {studentuKomanda}
            {/* <Studentas studentas={studentuKomanda[0]}></Studentas>
            <Studentas studentas={studentuKomanda[1]}></Studentas> */}
        </ul>
        <h2>Moksleiviai</h2>
        <ul>
            {moksleiviuKomanda.map(moksleivis => <Studentas studentas={moksleivis} />)}
        </ul>
        </>
    )
}
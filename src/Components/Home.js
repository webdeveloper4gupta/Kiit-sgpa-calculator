import React, { useState } from 'react';

const Home = () => {
      let b1 = [];
      let b2 = [];
      let b3 = [];
      let b4 = [];
      let b5 = [];
      let b6 = [];
      let g1,g2,g3,g4,g5,g6,g7,g8;
      const [d1, setd1] = useState('none');
      const [d2, setd2] = useState('none');
      const [d3, setd3] = useState('none');
      const [d4, setd4] = useState('none');
      const [d5, setd5] = useState('none');
      const [d6, setd6] = useState('none');
      const [d7, setd7] = useState('none');
      const [d8, setd8] = useState('none');
      const [m1, setm1] = useState();
      const [m2, setm2] = useState();
      const [m3, setm3] = useState();
      const [m4, setm4] = useState();
      const [m5, setm5] = useState();
      const [m6, setm6] = useState();
      const set1 = (e) => {
            if (e.target.value === "5th") {
                  setd1("none")
                  setd2("none")
                  setd3("none")
                  setd4("none")
                  setd5("block")
                  setd6("none")
                  setd7("none")
                  setd8("none")
            }
            else if (e.target.value === "1st") {
                  setd1("block")
                  setd2("none")
                  setd3("none")
                  setd4("none")
                  setd5("none")
                  setd6("none")
                  setd7("none")
                  setd8("none")
            }
            else if (e.target.value === "2nd") {
                  setd1("none")
                  setd2("block")
                  setd3("none")
                  setd4("none")
                  setd5("none")
                  setd6("none")
                  setd7("none")
                  setd8("none")
            }
            else if (e.target.value === "3rd") {
                  setd1("none")
                  setd2("none")
                  setd3("block")
                  setd4("none")
                  setd5("none")
                  setd6("none")
                  setd7("none")
                  setd8("none")
            }
            else if (e.target.value === '4th') {
                  setd1("none")
                  setd2("none")
                  setd3("none")
                  setd4("block")
                  setd5("none")
                  setd6("none")
                  setd7("none")
                  setd8("none")
            }
            else if (e.target.value === '6th') {
                  setd1("none")
                  setd2("none")
                  setd3("none")
                  setd4("none")
                  setd5("none")
                  setd6("block")
                  setd7("none")
                  setd8("none")
            }
            else if (e.target.value === '7th') {
                  setd1("none")
                  setd2("none")
                  setd3("none")
                  setd4("none")
                  setd5("none")
                  setd6("none")
                  setd7("block")
                  setd8("none")
            }
            else if (e.target.value === '8th') {
                  setd1("none")
                  setd2("none")
                  setd3("none")
                  setd4("none")
                  setd5("none")
                  setd6("none")
                  setd7("none")
                  setd8("block")
            }
      }
      let c1,c2,c3,c4,c5,c6,c7,c8,c9,c10;
      const marks1 = (e) => {
            if(e.target.value!=='' && e.target.name==='m1'){
               
            c1=0;
            b1.splice(c1,0,e.target.value)
            }
            else if(e.target.value==='' && e.target.name==='m1'){
                  
                  b1.splice(0,1);
            }
            else if (e.target.value !== '' && e.target.name === 'm2') {
                  c2 = 1;
                  b1.splice(c2,0,e.target.value)
           
            }
            else if (e.target.value === '' && e.target.name === 'm2') {

                  b1.splice(c2,1);
            }
            else if (e.target.value !== '' && e.target.name === 'm3') {

                  c3 = 2;
                  b1.splice(c3, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm3') {

                  b1.splice(c3,1);
            }
            else if (e.target.value !== '' && e.target.name === 'm4') {

                  c4 = 3;
                  b1.splice(c4, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm4') {

                  b1.splice(c4,1);
            }
            else if (e.target.value !== '' && e.target.name === 'm5') {

                  c5 = 4;
                  b1.splice(c5, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm5') {

                  b1.splice(c5, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm6') {

                  c6 = 5;
                  b1.splice(c6, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm6') {

                  b1.splice(c6, 1 );
            }
            else if (e.target.value !== '' && e.target.name === 'm7') {

                  c7 = 6;
                  b1.splice(c7, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm7') {

                  b1.splice(c7, 1 );
            }
            else if (e.target.value !== '' && e.target.name === 'm8') {

                  c8 = 7;
                  b1.splice(c8, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm8') {

                  b1.splice(c8, 1 );
            }
            console.log(b1)
      }
      // for sem2
      const marks2 = (e) => {
            if (e.target.value !== '' && e.target.name === 'm1') {

                  c1 = 0;
                  b2.splice(c1, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm1') {

                  b2.splice(0, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm2') {
                  c2 = 1;
                  b2.splice(c2, 0, e.target.value)

            }
            else if (e.target.value === '' && e.target.name === 'm2') {

                  b2.splice(c2, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm3') {

                  c3 = 2;
                  b2.splice(c3, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm3') {

                  b2.splice(c3, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm4') {

                  c4 = 3;
                  b2.splice(c4, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm4') {

                  b2.splice(c4, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm5') {

                  c5 = 4;
                  b2.splice(c5, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm5') {

                  b2.splice(c5, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm6') {

                  c6 = 5;
                  b2.splice(c6, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm6') {

                  b2.splice(c6, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm7') {

                  c7 = 6;
                  b2.splice(c7, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm7') {

                  b2.splice(c7, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm8') {

                  c8 = 7;
                  b2.splice(c8, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm8') {

                  b2.splice(c8, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm9') {

                  c9 = 8;
                  b2.splice(c9, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm9') {

                  b2.splice(c9, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm10') {

                  c10= 9;
                  b2.splice(c10, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm10') {

                  b2.splice(c10, 1);
            }
            console.log(b2)
      }
      // for sem3
      const marks3 = (e) => {
            if (e.target.value !== '' && e.target.name === 'm1') {

                  c1 = 0;
                  b3.splice(c1, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm1') {

                  b3.splice(0, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm2') {
                  c2 = 1;
                  b3.splice(c2, 0, e.target.value)

            }
            else if (e.target.value === '' && e.target.name === 'm2') {

                  b3.splice(c2, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm3') {

                  c3 = 2;
                  b3.splice(c3, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm3') {

                  b3.splice(c3, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm4') {

                  c4 = 3;
                  b3.splice(c4, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm4') {

                  b3.splice(c4, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm5') {

                  c5 = 4;
                  b3.splice(c5, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm5') {

                  b3.splice(c5, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm6') {

                  c6 = 5;
                  b3.splice(c6, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm6') {

                  b3.splice(c6, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm7') {

                  c7 = 6;
                  b3.splice(c7, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm7') {

                  b3.splice(c7, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm8') {

                  c8 = 7;
                  b3.splice(c8, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm8') {

                  b3.splice(c8, 1);
            }
            console.log(b3)
      }
      // /for sem4
      const marks4 = (e) => {
            if (e.target.value !== '' && e.target.name === 'm1') {

                  c1 = 0;
                  b4.splice(c1, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm1') {

                  b4.splice(0, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm2') {
                  c2 = 1;
                  b4.splice(c2, 0, e.target.value)

            }
            else if (e.target.value === '' && e.target.name === 'm2') {

                  b4.splice(c2, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm3') {

                  c3 = 2;
                  b4.splice(c3, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm3') {

                  b4.splice(c3, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm4') {

                  c4 = 3;
                  b4.splice(c4, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm4') {

                  b4.splice(c4, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm5') {

                  c5 = 4;
                  b4.splice(c5, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm5') {

                  b4.splice(c5, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm6') {

                  c6 = 5;
                  b4.splice(c6, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm6') {

                  b4.splice(c6, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm7') {

                  c7 = 6;
                  b4.splice(c7, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm7') {

                  b4.splice(c7, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm8') {

                  c8 = 7;
                  b4.splice(c8, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm8') {

                  b4.splice(c8, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm9') {

                  c9 = 8;
                  b4.splice(c9, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm9') {

                  b4.splice(c9, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm10') {

                  c10 = 9;
                  b4.splice(c10, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm10') {

                  b4.splice(c10, 1);
            }
            console.log(b4)
      }
// for sem5
      const marks5 = (e) => {
            if (e.target.value !== '' && e.target.name === 'm1') {

                  c1 = 0;
                  b5.splice(c1, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm1') {

                  b5.splice(0, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm2') {
                  c2 = 1;
                  b5.splice(c2, 0, e.target.value)

            }
            else if (e.target.value === '' && e.target.name === 'm2') {

                  b5.splice(c2, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm3') {

                  c3 = 2;
                  b5.splice(c3, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm3') {

                  b5.splice(c3, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm4') {

                  c4 = 3;
                  b5.splice(c4, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm4') {

                  b5.splice(c4, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm5') {

                  c5 = 4;
                  b5.splice(c5, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm5') {

                  b5.splice(c5, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm6') {

                  c6 = 5;
                  b5.splice(c6, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm6') {

                  b5.splice(c6, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm7') {

                  c7 = 6;
                  b5.splice(c7, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm7') {

                  b5.splice(c7, 1);
            }
            else if (e.target.value !== '' && e.target.name === 'm8') {

                  c8 = 7;
                  b5.splice(c8, 0, e.target.value)
            }
            else if (e.target.value === '' && e.target.name === 'm8') {

                  b5.splice(c8, 1);
            }
            console.log(b5)
      }

      // for sem1
      const sem1 = (e) => {
            let c1 = 0;
            e.preventDefault()
            // 0 for mathermatics1
            switch (b1[0].toLowerCase()) {
                  case 'o' : c1 = c1 + 10 * 4

                        break;
                  case 'e' : c1 = c1 + 9 * 4
                        break;
                  case 'a' : c1 = c1 + 8 * 4
                        break;
                  case 'b' : c1 = c1 + 7 * 4
                        break;
                  case 'c' : c1 = c1 + 6 * 4
                        break;
                  case 'd' : c1 = c1 + 5 * 4
                        break;
                  case 'f' : c1 = c1 + 2 * 4;
                        break;

                  default:
                        break;
            }
           
            // 1 for chemistry
            switch (b1[1].toLowerCase()) {
                  case 'o' : c1 = c1 + 10 * 3

                        break;
                  case 'e' : c1 = c1 + 9 * 3
                        break;
                  case 'a' : c1 = c1 + 8 * 3
                        break;
                  case 'b' : c1 = c1 + 7 * 3
                        break;
                  case 'c' : c1 = c1 + 6 * 3
                        break;
                  case 'd' : c1 = c1 + 5 * 3
                        break;
                  case 'f' : c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }
       
            // 2 for pcom
            switch (b1[2].toLowerCase()) {
                  case 'o' : c1 = c1 + 10 * 2

                        break;
                  case 'e' : c1 = c1 + 9 * 2
                        break;
                  case 'a' : c1 = c1 + 8 * 2
                        break;
                  case 'b' : c1 = c1 + 7 * 2
                        break;
                  case 'c' : c1 = c1 + 6 * 2
                        break;
                  case 'd' : c1 = c1 + 5 * 2
                        break;
                  case 'f' : c1 = c1 + 2 * 2;
                        break;

                  default:
                        break;
            }
           
            // 3 for Biology
            switch (b1[3].toLowerCase()) {
                  case 'o' : c1 = c1 + 10 * 2

                        break;
                  case 'e' : c1 = c1 + 9 * 2
                        break;
                  case 'a' : c1 = c1 + 8 * 2
                        break;
                  case 'b' : c1 = c1 + 7 * 2
                        break;
                  case 'c' : c1 = c1 + 6 * 2
                        break;
                  case 'd' : c1 = c1 + 5 * 2
                        break;
                  case 'f' : c1 = c1 + 2 * 2;
                        break;

                  default:
                        break;
            }
            
            // 4 for c
            switch (b1[4].toLowerCase()) {
                  case 'o' : c1 = c1 + 10 * 4

                        break;
                  case 'e' : c1 = c1 + 9 * 4
                        break;
                  case 'a' : c1 = c1 + 8 * 4
                        break;
                  case 'b' : c1 = c1 + 7 * 4
                        break;
                  case 'c' : c1 = c1 + 6 * 4
                        break;
                  case 'd' : c1 = c1 + 5 * 4
                        break;
                  case 'f' : c1 = c1 + 2 * 4;
                        break;

                  default:
                        break;
            }
            
            // 5 for chemistry lab
            switch (b1[5].toLowerCase()) {
                  case 'o' : c1 = c1 + 10 * 1.5

                        break;
                  case 'e' : c1 = c1 + 9 * 1.5
                        break;
                  case 'a' : c1 = c1 + 8 * 1.5
                        break;
                  case 'b' : c1 = c1 + 7 * 1.5
                        break;
                  case 'c' : c1 = c1 + 6 * 1.5
                        break;
                  case 'd' : c1 = c1 + 5 * 1.5
                        break;
                  case 'f' : c1 = c1 + 2 * 1.5;
                        break;

                  default:
                        break;
            }
            
            // 6 for languge lab
            switch (b1[6].toLowerCase()) {
                  case 'o' : c1 = c1 + 10 * 1

                        break;
                  case 'e' : c1 = c1 + 9 * 1
                        break;
                  case 'a' : c1 = c1 + 8 * 1
                        break;
                  case 'b' : c1 = c1 + 7 * 1
                        break;
                  case 'c' : c1 = c1 + 6 * 1
                        break;
                  case 'd' : c1 = c1 + 5 * 1
                        break;
                  case 'f' : c1 = c1 + 2 * 1;
                        break;

                  default:
                        break;
            }
            
            // 7 for engineering graphics
            switch (b1[7].toLowerCase()) {
                  case 'o' : c1 = c1 + 10 * 2

                        break;
                  case 'e' : c1 = c1 + 9 * 2
                        break;
                  case 'a' : c1 = c1 + 8 * 2
                        break;
                  case 'b' : c1 = c1 + 7 * 2
                        break;
                  case 'c' : c1 = c1 + 6 * 2
                        break;
                  case 'd' : c1 = c1 + 5 * 2
                        break;
                  case 'f' : c1 = c1 + 2 * 2;
                        break;

                  default:
                        break;
            }
            let e1=(c1/19.5);
            setm1(Math.ceil(e1 * 100) / 100)
      }
      // for second sem
      const sem2 = (e) => {
            let c1 = 0;
            e.preventDefault()
            // 0 for bee
            switch (b2[0].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 3

                        break;
                  case 'e': c1 = c1 + 9 * 3
                        break;
                  case 'a': c1 = c1 + 8 * 3
                        break;
                  case 'b': c1 = c1 + 7 * 3
                        break;
                  case 'c': c1 = c1 + 6 * 3
                        break;
                  case 'd': c1 = c1 + 5 * 3
                        break;
                  case 'f': c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }

            // 1 for physics
            switch (b2[1].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 4

                        break;
                  case 'e': c1 = c1 + 9 * 4
                        break;
                  case 'a': c1 = c1 + 8 * 4
                        break;
                  case 'b': c1 = c1 + 7 * 4
                        break;
                  case 'c': c1 = c1 + 6 * 4
                        break;
                  case 'd': c1 = c1 + 5 * 4
                        break;
                  case 'f': c1 = c1 + 2 * 4;
                        break;

                  default:
                        break;
            }

            // 2 for mathematics
            switch (b2[2].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 4

                        break;
                  case 'e': c1 = c1 + 9 * 4
                        break;
                  case 'a': c1 = c1 + 8 * 4
                        break;
                  case 'b': c1 = c1 + 7 * 4
                        break;
                  case 'c': c1 = c1 + 6 * 4
                        break;
                  case 'd': c1 = c1 + 5 * 4
                        break;
                  case 'f': c1 = c1 + 2 * 4;
                        break;

                  default:
                        break;
            }

            // 3 for aec
            switch (b2[3].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 3

                        break;
                  case 'e': c1 = c1 + 9 * 3
                        break;
                  case 'a': c1 = c1 + 8 * 3
                        break;
                  case 'b': c1 = c1 + 7 * 3
                        break;
                  case 'c': c1 = c1 + 6 * 3
                        break;
                  case 'd': c1 = c1 + 5 * 3
                        break;
                  case 'f': c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }

            // 4 for physics lab
            switch (b2[4].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 1.5

                        break;
                  case 'e': c1 = c1 + 9 * 1.5
                        break;
                  case 'a': c1 = c1 + 8 * 1.5
                        break;
                  case 'b': c1 = c1 + 7 * 1.5
                        break;
                  case 'c': c1 = c1 + 6 * 1.5
                        break;
                  case 'd': c1 = c1 + 5 * 1.5
                        break;
                  case 'f': c1 = c1 + 2 * 1.5;
                        break;

                  default:
                        break;
            }

            // 5 for bee lab
            switch (b2[5].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 1

                        break;
                  case 'e': c1 = c1 + 9 * 1
                        break;
                  case 'a': c1 = c1 + 8 * 1
                        break;
                  case 'b': c1 = c1 + 7 * 1
                        break;
                  case 'c': c1 = c1 + 6 * 1
                        break;
                  case 'd': c1 = c1 + 5 * 1
                        break;
                  case 'f': c1 = c1 + 2 * 1;
                        break;

                  default:
                        break;
            }

            // 6 for aec lab
            switch (b2[6].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 1

                        break;
                  case 'e': c1 = c1 + 9 * 1
                        break;
                  case 'a': c1 = c1 + 8 * 1
                        break;
                  case 'b': c1 = c1 + 7 * 1
                        break;
                  case 'c': c1 = c1 + 6 * 1
                        break;
                  case 'd': c1 = c1 + 5 * 1
                        break;
                  case 'f': c1 = c1 + 2 * 1;
                        break;

                  default:
                        break;
            }

            // 7 for bms
            switch (b2[7].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 2

                        break;
                  case 'e': c1 = c1 + 9 * 2
                        break;
                  case 'a': c1 = c1 + 8 * 2
                        break;
                  case 'b': c1 = c1 + 7 * 2
                        break;
                  case 'c': c1 = c1 + 6 * 2
                        break;
                  case 'd': c1 = c1 + 5 * 2
                        break;
                  case 'f': c1 = c1 + 2 * 2;
                        break;

                  default:
                        break;
            }
            // 7 for environment science
            switch (b2[8].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 1

                        break;
                  case 'e': c1 = c1 + 9 * 1
                        break;
                  case 'a': c1 = c1 + 8 * 1
                        break;
                  case 'b': c1 = c1 + 7 * 1
                        break;
                  case 'c': c1 = c1 + 6 * 1
                        break;
                  case 'd': c1 = c1 + 5 * 1
                        break;
                  case 'f': c1 = c1 + 2 * 1;
                        break;

                  default:
                        break;
            }
            // 7 for yoga
            switch (b2[9].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 1

                        break;
                  case 'e': c1 = c1 + 9 * 1
                        break;
                  case 'a': c1 = c1 + 8 * 1
                        break;
                  case 'b': c1 = c1 + 7 * 1
                        break;
                  case 'c': c1 = c1 + 6 * 1
                        break;
                  case 'd': c1 = c1 + 5 * 1
                        break;
                  case 'f': c1 = c1 + 2 * 1;
                        break;

                  default:
                        break;
            }
            let e1 = (c1 / 21.5);
            setm2(Math.ceil(e1 * 100) / 100)
      }
      // for sem3
      const sem3 = (e) => {
            let c1 = 0;
            e.preventDefault()
            // 0 for dsa
            switch (b3[0].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 4

                        break;
                  case 'e': c1 = c1 + 9 * 4
                        break;
                  case 'a': c1 = c1 + 8 * 4
                        break;
                  case 'b': c1 = c1 + 7 * 4
                        break;
                  case 'c': c1 = c1 + 6 * 4
                        break;
                  case 'd': c1 = c1 + 5 * 4
                        break;
                  case 'f': c1 = c1 + 2 * 4;
                        break;

                  default:
                        break;
            }

            // 1 for de
            switch (b3[1].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 3

                        break;
                  case 'e': c1 = c1 + 9 * 3
                        break;
                  case 'a': c1 = c1 + 8 * 3
                        break;
                  case 'b': c1 = c1 + 7 * 3
                        break;
                  case 'c': c1 = c1 + 6 * 3
                        break;
                  case 'd': c1 = c1 + 5 * 3
                        break;
                  case 'f': c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }

            // 2 for econ
            switch (b3[2].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 3

                        break;
                  case 'e': c1 = c1 + 9 * 3
                        break;
                  case 'a': c1 = c1 + 8 * 3
                        break;
                  case 'b': c1 = c1 + 7 * 3
                        break;
                  case 'c': c1 = c1 + 6 * 3
                        break;
                  case 'd': c1 = c1 + 5 * 3
                        break;
                  case 'f': c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }

            // 3 for dms
            switch (b3[3].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 3

                        break;
                  case 'e': c1 = c1 + 9 * 3
                        break;
                  case 'a': c1 = c1 + 8 * 3
                        break;
                  case 'b': c1 = c1 + 7 * 3
                        break;
                  case 'c': c1 = c1 + 6 * 3
                        break;
                  case 'd': c1 = c1 + 5 * 3
                        break;
                  case 'f': c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }

            // 4 for oops
            switch (b3[4].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 3

                        break;
                  case 'e': c1 = c1 + 9 * 3
                        break;
                  case 'a': c1 = c1 + 8 * 3
                        break;
                  case 'b': c1 = c1 + 7 * 3
                        break;
                  case 'c': c1 = c1 + 6 * 3
                        break;
                  case 'd': c1 = c1 + 5 * 3
                        break;
                  case 'f': c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }

            // 5 for Probability & Statistics
            switch (b3[5].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 3

                        break;
                  case 'e': c1 = c1 + 9 * 3
                        break;
                  case 'a': c1 = c1 + 8 * 3
                        break;
                  case 'b': c1 = c1 + 7 * 3
                        break;
                  case 'c': c1 = c1 + 6 * 3
                        break;
                  case 'd': c1 = c1 + 5 * 3
                        break;
                  case 'f': c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }

            
            switch (b3[6].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 1

                        break;
                  case 'e': c1 = c1 + 9 * 1
                        break;
                  case 'a': c1 = c1 + 8 * 1
                        break;
                  case 'b': c1 = c1 + 7 * 1
                        break;
                  case 'c': c1 = c1 + 6 * 1
                        break;
                  case 'd': c1 = c1 + 5 * 1
                        break;
                  case 'f': c1 = c1 + 2 * 1;
                        break;

                  default:
                        break;
            }

            
            switch (b3[7].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 1

                        break;
                  case 'e': c1 = c1 + 9 * 1
                        break;
                  case 'a': c1 = c1 + 8 * 1
                        break;
                  case 'b': c1 = c1 + 7 * 1
                        break;
                  case 'c': c1 = c1 + 6 * 1
                        break;
                  case 'd': c1 = c1 + 5 * 1
                        break;
                  case 'f': c1 = c1 + 2 * 1;
                        break;

                  default:
                        break;
            }
            let e1 = (c1 / 21);
            setm3(Math.ceil(e1 * 100) / 100);
            console.log(e1)
      }
      // for sem4
      const sem4 = (e) => {
            let c1 = 0;
            e.preventDefault()
            // 0 for bee
            switch (b4[0].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 4

                        break;
                  case 'e': c1 = c1 + 9 * 4
                        break;
                  case 'a': c1 = c1 + 8 * 4
                        break;
                  case 'b': c1 = c1 + 7 * 4
                        break;
                  case 'c': c1 = c1 + 6 * 4
                        break;
                  case 'd': c1 = c1 + 5 * 4
                        break;
                  case 'f': c1 = c1 + 2 * 4;
                        break;

                  default:
                        break;
            }

            // 1 for physics
            switch (b4[1].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 4

                        break;
                  case 'e': c1 = c1 + 9 * 4
                        break;
                  case 'a': c1 = c1 + 8 * 4
                        break;
                  case 'b': c1 = c1 + 7 * 4
                        break;
                  case 'c': c1 = c1 + 6 * 4
                        break;
                  case 'd': c1 = c1 + 5 * 4
                        break;
                  case 'f': c1 = c1 + 2 * 4;
                        break;

                  default:
                        break;
            }

            // 2 for mathematics
            switch (b4[2].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 4

                        break;
                  case 'e': c1 = c1 + 9 * 4
                        break;
                  case 'a': c1 = c1 + 8 * 4
                        break;
                  case 'b': c1 = c1 + 7 * 4
                        break;
                  case 'c': c1 = c1 + 6 * 4
                        break;
                  case 'd': c1 = c1 + 5 * 4
                        break;
                  case 'f': c1 = c1 + 2 * 4;
                        break;

                  default:
                        break;
            }

            // 3 for aec
            switch (b4[3].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 3

                        break;
                  case 'e': c1 = c1 + 9 * 3
                        break;
                  case 'a': c1 = c1 + 8 * 3
                        break;
                  case 'b': c1 = c1 + 7 * 3
                        break;
                  case 'c': c1 = c1 + 6 * 3
                        break;
                  case 'd': c1 = c1 + 5 * 3
                        break;
                  case 'f': c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }

            // 4 for physics lab
            switch (b4[4].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 4

                        break;
                  case 'e': c1 = c1 + 9 * 4
                        break;
                  case 'a': c1 = c1 + 8 * 4
                        break;
                  case 'b': c1 = c1 + 7 * 4
                        break;
                  case 'c': c1 = c1 + 6 * 4
                        break;
                  case 'd': c1 = c1 + 5 * 4
                        break;
                  case 'f': c1 = c1 + 2 * 4;
                        break;

                  default:
                        break;
            }

            // 5 for bee lab
            switch (b4[5].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 3

                        break;
                  case 'e': c1 = c1 + 9 * 3
                        break;
                  case 'a': c1 = c1 + 8 * 3
                        break;
                  case 'b': c1 = c1 + 7 * 3
                        break;
                  case 'c': c1 = c1 + 6 * 3
                        break;
                  case 'd': c1 = c1 + 5 * 3
                        break;
                  case 'f': c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }

            // 6 for aec lab
            switch (b4[6].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 1

                        break;
                  case 'e': c1 = c1 + 9 * 1
                        break;
                  case 'a': c1 = c1 + 8 * 1
                        break;
                  case 'b': c1 = c1 + 7 * 1
                        break;
                  case 'c': c1 = c1 + 6 * 1
                        break;
                  case 'd': c1 = c1 + 5 * 1
                        break;
                  case 'f': c1 = c1 + 2 * 1;
                        break;

                  default:
                        break;
            }

            switch (b4[7].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 1

                        break;
                  case 'e': c1 = c1 + 9 * 1
                        break;
                  case 'a': c1 = c1 + 8 * 1
                        break;
                  case 'b': c1 = c1 + 7 * 1
                        break;
                  case 'c': c1 = c1 + 6 * 1
                        break;
                  case 'd': c1 = c1 + 5 * 1
                        break;
                  case 'f': c1 = c1 + 2 * 1;
                        break;

                  default:
                        break;
            }
            
            switch (b4[8].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 1

                        break;
                  case 'e': c1 = c1 + 9 * 1
                        break;
                  case 'a': c1 = c1 + 8 * 1
                        break;
                  case 'b': c1 = c1 + 7 * 1
                        break;
                  case 'c': c1 = c1 + 6 * 1
                        break;
                  case 'd': c1 = c1 + 5 * 1
                        break;
                  case 'f': c1 = c1 + 2 * 1;
                        break;

                  default:
                        break;
            }
           
            switch (b4[9].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 1

                        break;
                  case 'e': c1 = c1 + 9 * 1
                        break;
                  case 'a': c1 = c1 + 8 * 1
                        break;
                  case 'b': c1 = c1 + 7 * 1
                        break;
                  case 'c': c1 = c1 + 6 * 1
                        break;
                  case 'd': c1 = c1 + 5 * 1
                        break;
                  case 'f': c1 = c1 + 2 * 1;
                        break;

                  default:
                        break;
            }
            let e1 = (c1 / 26);
            setm4(Math.ceil(e1 * 100) / 100)
      }

      // for 5th semester
      const sem5 = (e) => {
            let c1 = 0;
            e.preventDefault()
            // 0 for dsa
            switch (b5[0].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 4

                        break;
                  case 'e': c1 = c1 + 9 * 4
                        break;
                  case 'a': c1 = c1 + 8 * 4
                        break;
                  case 'b': c1 = c1 + 7 * 4
                        break;
                  case 'c': c1 = c1 + 6 * 4
                        break;
                  case 'd': c1 = c1 + 5 * 4
                        break;
                  case 'f': c1 = c1 + 2 * 4;
                        break;

                  default:
                        break;
            }

            // 1 for de
            switch (b5[1].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 3

                        break;
                  case 'e': c1 = c1 + 9 * 3
                        break;
                  case 'a': c1 = c1 + 8 * 3
                        break;
                  case 'b': c1 = c1 + 7 * 3
                        break;
                  case 'c': c1 = c1 + 6 * 3
                        break;
                  case 'd': c1 = c1 + 5 * 3
                        break;
                  case 'f': c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }

            // 2 for econ
            switch (b5[2].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 3

                        break;
                  case 'e': c1 = c1 + 9 * 3
                        break;
                  case 'a': c1 = c1 + 8 * 3
                        break;
                  case 'b': c1 = c1 + 7 * 3
                        break;
                  case 'c': c1 = c1 + 6 * 3
                        break;
                  case 'd': c1 = c1 + 5 * 3
                        break;
                  case 'f': c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }

            // 3 for dms
            switch (b5[3].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 4

                        break;
                  case 'e': c1 = c1 + 9 * 4
                        break;
                  case 'a': c1 = c1 + 8 * 4
                        break;
                  case 'b': c1 = c1 + 7 * 4
                        break;
                  case 'c': c1 = c1 + 6 * 4
                        break;
                  case 'd': c1 = c1 + 5 * 4
                        break;
                  case 'f': c1 = c1 + 2 * 4;
                        break;

                  default:
                        break;
            }

            // 4 for oops
            switch (b5[4].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 3

                        break;
                  case 'e': c1 = c1 + 9 * 3
                        break;
                  case 'a': c1 = c1 + 8 * 3
                        break;
                  case 'b': c1 = c1 + 7 * 3
                        break;
                  case 'c': c1 = c1 + 6 * 3
                        break;
                  case 'd': c1 = c1 + 5 * 3
                        break;
                  case 'f': c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }

            // 5 for Probability & Statistics
            switch (b5[5].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 3

                        break;
                  case 'e': c1 = c1 + 9 * 3
                        break;
                  case 'a': c1 = c1 + 8 * 3
                        break;
                  case 'b': c1 = c1 + 7 * 3
                        break;
                  case 'c': c1 = c1 + 6 * 3
                        break;
                  case 'd': c1 = c1 + 5 * 3
                        break;
                  case 'f': c1 = c1 + 2 * 3;
                        break;

                  default:
                        break;
            }


            switch (b5[6].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 1

                        break;
                  case 'e': c1 = c1 + 9 * 1
                        break;
                  case 'a': c1 = c1 + 8 * 1
                        break;
                  case 'b': c1 = c1 + 7 * 1
                        break;
                  case 'c': c1 = c1 + 6 * 1
                        break;
                  case 'd': c1 = c1 + 5 * 1
                        break;
                  case 'f': c1 = c1 + 2 * 1;
                        break;

                  default:
                        break;
            }


            switch (b5[7].toLowerCase()) {
                  case 'o': c1 = c1 + 10 * 1

                        break;
                  case 'e': c1 = c1 + 9 * 1
                        break;
                  case 'a': c1 = c1 + 8 * 1
                        break;
                  case 'b': c1 = c1 + 7 * 1
                        break;
                  case 'c': c1 = c1 + 6 * 1
                        break;
                  case 'd': c1 = c1 + 5 * 1
                        break;
                  case 'f': c1 = c1 + 2 * 1;
                        break;

                  default:
                        break;
            }
            let e1 = (c1 / 22);
            setm5(Math.ceil(e1 * 100) / 100);
            console.log(e1)
      }
      return (
            <div>
                  <h1>Welcome to code world of india</h1>
                  <h3>Below from the dropdown select your semester and calculate the SGPA</h3>
                Click here:  <select onClick={set1} >
                        <option value="1st">Ist semester</option>
                        <option value="2nd">2nd semester</option>
                        <option value="3rd">3rd semester</option>
                        <option value="4th">4th semester</option>
                        <option value="5th">5th semester</option>
                        <option value="6th">6th semester</option>
                        <option value="7th">7th semester</option>
                        <option value="8th">8th semester</option>
                  </select>
                  <div style={{ display: d1 }}>
                        <h1>First semester exam</h1>
                        <form>
                              <label htmlFor="">Mathematics 1:</label>
                              <input type="text" value={g1} onChange={marks1} name="m1" />    <br />
                              <label htmlFor="">Chemistry:</label>
                              <input type="text" value={g2} onChange={marks1} name="m2" />    <br />
                              <label htmlFor="">Professional communication:</label>
                              <input type="text" value={g3} onChange={marks1} name="m3" />    <br />
                              <label htmlFor="">Biology:</label>
                              <input type="text" value={g4} onChange={marks1} name="m4" />    <br />
                              <label htmlFor="">Computer programming:</label>
                              <input type="text" value={g5} onChange={marks1} name="m5" />    <br />
                              <label htmlFor="">Chemistry lab:</label>
                              <input type="text" value={g6} onChange={marks1} name="m6" />    <br />
                              <label htmlFor="">Language lab:</label>
                              <input type="text" value={g7} onChange={marks1} name="m7" />    <br />
                              <label htmlFor=""> Engineering Graphics:</label>
                              <input type="text" value={g8} onChange={marks1} name="m8" />    <br />
                              <input type="submit" value="submit" onClick={sem1} />
                        </form>
                        <br/>
                        <hr/>
                            <span> sgpa</span>  
                        {
                            <input type="text" value={m1} disabled/>
                        }
                        <hr/>
                  </div>
                  <div style={{ display: d2 }}>
                        <h1>Second semester exam</h1>
                        <form>
                              <label htmlFor="">Basic electrical engineering</label>
                              <input type="text" value={g1} onChange={marks2} name="m1" />    <br />
                              <label htmlFor="">Physics</label>
                              <input type="text" value={g2} onChange={marks2} name="m2" />    <br />
                              <label htmlFor="">Mthematics 2:</label>
                              <input type="text" value={g3} onChange={marks2} name="m3" />    <br />
                              <label htmlFor="">Analog Electronic Circuits:</label>
                              <input type="text" value={g4} onChange={marks2} name="m4" />    <br />
                              <label htmlFor="">Physics Lab:</label>
                              <input type="text" value={g5} onChange={marks2} name="m5" />    <br />
                              <label htmlFor="">Basic Electrical Engineering Lab:</label>
                              <input type="text" value={g6} onChange={marks2} name="m6" />    <br />
                              <label htmlFor="">Analog Electronic Circuits Lab:</label>
                              <input type="text" value={g7} onChange={marks2} name="m7" />    <br />
                              <label htmlFor=""> Basic Manufacturing Systems:</label>
                              <input type="text" value={g8} onChange={marks2} name="m8" />    <br />
                              <label htmlFor=""> Environmental Science:</label>
                              <input type="text" value={g8} onChange={marks2} name="m9" />    <br />
                              <label htmlFor=""> YOGA AND HUMAN CONSCIOUSNESS:</label>
                              <input type="text" value={g8} onChange={marks2} name="m10" />    <br />
                              <input type="submit" value="submit" onClick={sem2} />
                        </form>
                        <br />
                        <hr />
                        <span> sgpa</span>
                        {
                              <input type="text" value={m2} disabled />
                        }
                        <hr />
                  </div>
                  <div style={{ display: d3 }}>
                        <h1>third semester exam</h1>
                        <form>
                              <label htmlFor="">Data Structures and Algorithms:</label>
                              <input type="text" value={g1} onChange={marks3} name="m1" />    <br />
                              <label htmlFor="">Digital Electronics:</label>
                              <input type="text" value={g2} onChange={marks3} name="m2" />    <br />
                              <label htmlFor="">Engineering Economics:</label>
                              <input type="text" value={g3} onChange={marks3} name="m3" />    <br />
                              <label htmlFor="">Discrete Mathematics:</label>
                              <input type="text" value={g4} onChange={marks3} name="m4" />    <br />
                              <label htmlFor="">Object Oriented Programming:</label>
                              <input type="text" value={g5} onChange={marks3} name="m5" />    <br />
                              <label htmlFor="">Probability & Statistics:</label>
                              <input type="text" value={g6} onChange={marks3} name="m6" />    <br />
                              <label htmlFor="">Data Structures Laboratory:</label>
                              <input type="text" value={g7} onChange={marks3} name="m7" />    <br />
                              <label htmlFor=""> Object Oriented Programming Laboratory:</label>
                              <input type="text" value={g8} onChange={marks3} name="m8" />    <br />
                              <input type="submit" value="submit" onClick={sem3} />
                        </form>
                        <br />
                        <hr />
                        <span> sgpa</span>
                        {
                              <input type="text" value={m3} disabled />
                        }
                        <hr />
                  </div>
                  <div style={{ display: d4 }}>
                        <h1>Fourth semester exam</h1>
                        <form>
                              <label htmlFor="">Computer Organization and Architecture:</label>
                              <input type="text" value={g1} onChange={marks4} name="m1" />    <br />
                              <label htmlFor="">Database Management System:</label>
                              <input type="text" value={g2} onChange={marks4} name="m2" />    <br />
                              <label htmlFor="">Principle of Digital Communication:</label>
                              <input type="text" value={g3} onChange={marks4} name="m3" />    <br />
                              <label htmlFor="">Operating Systems:</label>
                              <input type="text" value={g4} onChange={marks4} name="m4" />    <br />
                              <label htmlFor="">Automata and Formal Languages:</label>
                              <input type="text" value={g5} onChange={marks4} name="m5" />    <br />
                              <label htmlFor="">Web Technology:</label>
                              <input type="text" value={g6} onChange={marks4} name="m6" />    <br />
                              <label htmlFor="">Database Management System Laboratory:</label>
                              <input type="text" value={g7} onChange={marks4} name="m7" />    <br />
                              <label htmlFor=""> Web Technology Laboratory:</label>
                              <input type="text" value={g8} onChange={marks4} name="m8" />    <br />
                              <label htmlFor=""> Operating Systems Laboratory:</label>
                              <input type="text" value={g8} onChange={marks4} name="m9" />    <br />
                              <label htmlFor=""> Business Communication:</label>
                              <input type="text" value={g8} onChange={marks4} name="m10" />    <br />
                              <input type="submit" value="submit" onClick={sem4} />
                        </form>
                        <br />
                        <hr />
                        <span> sgpa</span>
                        {
                              <input type="text" value={m4} disabled />
                        }
                        <hr />
                  </div>
                  <div style={{ display: d5 }}>
                        <h1>Fifth semester exam</h1>
                       
                        <form>
                              <label htmlFor="">High performance computing:</label>
                              <input type="text" value={g1} onChange={marks5} name="m1" />    <br />
                              <label htmlFor="">computer network:</label>
                              <input type="text" value={g2} onChange={marks5} name="m2" />    <br />
                              <label htmlFor="">desig and analysis of algorithm:</label>
                              <input type="text" value={g3} onChange={marks5} name="m3" />    <br />
                              <label htmlFor="">software enginerring:</label>
                              <input type="text" value={g4} onChange={marks5} name="m4" />    <br />
                              <label htmlFor="">Artificial intelligence:</label>
                              <input type="text" value={g5} onChange={marks5} name="m5" />    <br />
                              <label htmlFor="">Big Data:</label>
                              <input type="text" value={g6} onChange={marks5} name="m6" />    <br />
                              <label htmlFor="">Network Laboratory:</label>
                              <input type="text" value={g7} onChange={marks5} name="m7" />    <br />
                              <label htmlFor=""> Algorithm Laboratory:</label>
                              <input type="text" value={g8} onChange={marks5} name="m8" />    <br />
                              <input type="submit" value="submit" onClick={sem5} />
                        </form>
                        <br />
                        <hr />
                        <span> sgpa</span>
                        {
                              <input type="text" value={m5} disabled />
                        }
                        <hr />
                  </div>
                  <div style={{ display: d6 }}>
                        <h1>Sixth semester exam</h1>
                        <h1>very soon it will updated</h1>
                  </div>
                  <div style={{ display: d7 }}>
                        <h1>seventh semester exam</h1>
                        <h1>very soon it will updated</h1>
                  </div>
                  <div style={{ display: d8 }}>
                        <h1>eight semester exam</h1>
                        <h1>very soon it will updated</h1>
                  </div>
            </div>

      );
}

export default Home;

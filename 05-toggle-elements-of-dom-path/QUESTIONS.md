# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?
.GetElementsByClassName () vietā es izmantoju .querySelectorAll (). .getElementsByClassName (), jo tam ir tikai viens arguments, tāpēc jūs nevarēsit pārvietoties kokā. Tomēr .querySelectorAll () ļauj iegūt precīzāku informāciju. Šajā gadījumā kā argumentu mēs ievietojām "ul.second_five li" un tas liek datoram atrast visus tagus ar klasi "ul", pēc tam no šiem tagiem mēs ņemam tikai tos, kas ir atzīmēti ar "second_five", tas pasaka viņam, ko ņemt tikai tos vienumus ar pirmajiem diviem atribūtiem, kas ir atzīmēti kā saraksta vienumi.

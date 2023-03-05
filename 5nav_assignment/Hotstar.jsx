import React from "react";
import STYLE from "./hotstar.module.css";
const Hotstar=()=>
{
    return(
        <div id={STYLE.c1}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAABgFBMVEUOGkz///8PG08OGksPGUwAADkAAD8AAEEAAD0AADv///0AAEAAADcQGk8AAEMAADX3+P8AADH4+/0AEEgAAEYEGEwAAC4AAC3O09wAEkgNG0oZHk0LF00ACEcLF0gAD0qRlqMAACnm6+9WXHff4eyqqrpDhcIVJ1cjP2wfR/hOVXJobIg6PmXZ3uRxdY2cobTEydcsP3MyUoQ9X5RDaZ49XpkzUYodMWU+YZU/d6VKhbdCisxEidNMiNlOf8pIbLlGiOJDgOFGZbkvS5AYI1xBaJY9cqcoS4MVL2oOI2QbP4A+cclDgOwzR4wTGVU6cZo2Yb86e/EMEloWLnc9atY8cvVAXMA2WIQrU8E5aPdCWdEbMl8KIGkmPp8zYOMuXfwnVPtAV+gbNLQeOMszS+YoN4sQKJM5R84jRnAQJIMLG0IhQvogR/IsPqsdNr8mMJGvuMCBh5l6gZAIHYBdXm80OWMcKU0yO1t4dZOFiqpES2afpK1SWnOztstpaIk/Qm2EslRwAAARXElEQVR4nO1cjX/TRpqWNCNZiiXZlmSQ5JHkOPY5+ENSux+03fa2H7BH77ph226X7YVud4HSQikXc3VcnDr86/e+I9sJCd0NvqQUMs+vFFuW5ZlnnvdTIyRJQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYAUo9EWP4OUDpcyiEiGS4O6koCwIXI4gCFj8oofziwdIDBhTLr/2+q/e+DXiN7/57WuXCZBHQxAeedHj+yUCNXbltdffePOtt976N8DvEG+/8847b//77397eStxhbkeA6UBu/z61TeRMyTtd29zvPPOuxzvvffe+x9ciWP0doK9JZjbRc7eRNr+8Otf/cdrl699iLj2nx988Pv/evfdjxDvvf/HrRg8HRHGCiCUkc03rl8Hzv5w9fVrlusmQXwACA7s2gd/+uijjz/+7OM/v38tiIWPQ8Rk88bVq1ffvH7j2lbAGHuGmOI4+eTTP/35488Af7kWhueeNxqHmzeuX79+9ca2FTBKFfBygKNn4YlB8ulfP/v88y8//+9P4/OelNDtGzdAa990YwaUQWWA0eEZpymKQqQ4ufnF3z7/8st//KVLz3MJQRubwNqNzTCgpKCL/32cEaAN/1JovPXF3778+5f/+GPI2M892l8K4suvA2nfNAJg4KTuirhXbt25dOnvf73ink8PR8PXvgHWtmO0wJPTBoH35u0Hly7d+epcOri4u7n5zTeb4N2ppXAbPBlzxIKwcRd5+yKg567QJ8jaZpdh3LQKz3VCwQHHoXTz4aVLD762zlkqQgrWFB49nx+KQj+5hbxdCc9VrUW625ub24xZq+URkI0Qdu/OpW/v3IzPEW3A2vZ2lyjWyrTBV+lNiKh37rHzY6ectRhCqLWqkQJtLL55G/UWnpfueaPb3Q5PoY8RfnIb9Pbh/RXJf9nQ7XYbJPz/X4fGwNu3X2/Na4hXHMqVK8opOSTyyZ1vL329dToX+2WDKFcUjlPwSCS8d+fBt98Fzyr/XzEopyU1CWmL7z14cOerc0Hb6V2LUhLfegBh4RQ85S8Jh1VwFgkWlSz28MGDW69U9kZdu6whSlpwVmZEw5u37zz4n/AVMdNQsjXWG2WzPJ91snTgVryIhcocp/hDSnj3zu3bH74atFFmpL4jA9bW8P+yM8w2dDv5adpWnbdi1W/dvv3dK9G1pNTryIfBuavu9Cpe3TpCGyUsMk3P0Bhdxf9RBcz09sObr4KZ0qQn+6N+bzKZTDfSvbztzOkbjuwSO0KbHaV5q1rNKtEqM6cKZXcfPvzOuv/yNy2pPZJbuZ4EgCSyNbvbz9qFwVazLbt+oCpqqf1WQanf1+qr/BYUC7ce3vr09JOQn30ZKAv62WjZ7acWS2x1Mmeumhn2ckS01jww5dxYaaQ0vnfr1hfsFShNKYtKh7jB1poUl8xezt1cNTVdq/jIfiTLnRGQORyljrzhrvRr9z+8e/fup8d6xUyLw5NIhli2rkXHj4daqZz8zH2pw2tPFwE0McY73FTzXdvC4bCxLO/vA5WZ6emZPCqt5N4s6969u18dbZDHjWxQPklXidijTic9vmJ61pn13Z9XxPRQtQ6vrcSzMMK6xjjnCUlfw21XpY7c7OG7CmW1tjwIVvotJdy6979fHd3jUG84cmqfIDgT05flHePY4Qo4lab34rqgQFuUPtaL10ENYgAILrtIKS3n8vdVWU51ptdyeaau/AtbW1tHO58MaHPICW6ncto62vHDnLYXt8MJaFP9hZRCywi4pc50xuwZSm+0rkZpCyLC6tGQ1HFHxFNAtckbyQm+y2njanuKeq62pVx/os1yhloEZ621YD0XP8EqI9RbbjB3AgQ6OzMfJDdT49UXNm6M7x+ZQUGbi2G9fnRy9eDwMU6buvwI8m4JN6PUhpy25XnPuA4Gv5XH/K9Alfq2vNbWpfnGGGrZPUyA8woz/Xn1VU2N+vEbDCddSxJU5eGReFLQ5unaeNA1tPmSEMyGbJOOBw1TrxcGSNfB3e6tayBMK1HJYKyVaRjSYB1pu2BgrAjDQC/tDsYYWgNVNRhcxzaMJFCT8SrJ5olAlaAnrzlJfVGPKpY+Accjdy6Ud+RWu1r1H2n2MyiK67Z1kh8gkj5cc9gzaOvt7oCQ5VZTmWtdYZqVDXHRWntjDTtONMwh4W7leZpQbYqVdKupA0/jHF4O8xwEqzCjt4NZeSvvGb08z2GB9SzPe4O82lrZIf8rUCXpQ7hsxHirjo8dErYnDsjskTfwd7XI0zxGKDqneh13mc7n706ctMQTFSIRvse+2L4QHF9gY0eWnzwdhzltaRW8wBom2T0NF83aMkYOHuJ5UKYyidYb/D28K3kp5pXwJteoO5jX0j9ExA3yZU7e3ICphHVJRctGJtUza4pZUQojaOhelHBJ4I3OEh5yum4lDrQY9xwFmlmzG42gYpbRouA8tivL/RIYthvZpUqlVquYSKraKwzj8HBLGZz6tPvntHFZ8erNmUAKZrEKD0L8GLpXncJ58z5NZoyBUbmFbx7byZOiAQFJDLPaeIZTfAkWqBrXqe4XtFbPQm0Et1Z5Wg1jQNZspvvbuhrxLoh1ASawtqNuBYPHGg2DyjTDwADjaGeT2LJtVwrVtuzsBlQb72czvw31fu7FktEHR08C1TYSstx0BOsij+zjtK3JzVKlxjB0+2oIFprBoerIqFTsFNmcGZbU6IMTy/fTqQrqaU0qBrxtaayLJ+z003FiAGtyex/WrbsHNgIXiJmiIW1ye/TjmfSsWFkbj/L22lLkrfyRVIoJLHwXpTBNvI6clu3BfPG4vfiamrV6uoTtp5npDQ+6TzM12gCNBto0r7Z77rJ9l2wcS704bXJaYRZjtRl8exxbyRSnGpYYthu8HA72oaqqob3VtBgFtGcwb6NarXbjrXVMQFQvsEf4w+UI1ojp0yqnLZa42vyKl5yFjWraI85HES/Xir+djgGFt6WCYck7JizuzJhUl7w6wIc3RatKUENOAxSy6HbKcleBSKLqKSqpZWC1a6Gk0RPlBneCi/yU0zY0+b5DdwyTTT1mAFOgX8JR92A1h6akGEibTggKyL/gsiRwY0q2eN5WspgBqhuqrCiySvtz2vBLsH6Wdeq0UVpadIWOwDfAToMJklQpO7J/EabjZ6ON3mDcDTUzsPewOVeJY5xtWevDEFv+rLP3aKLOgEj1MaZ7UPonFtXwfoWuEbyKrsE73SvuyHDaHtu8zLNKbfRd7D4cGmlSQVtoQ6CSJwHhtGkxF7ec92w7CGNClII2KZjCIHpRUd2GUsWXOW0YEvwKO5pknwa0EbbDZ810YwftsTvoj2ZD7nFGEcyF+4wBeOTWRWfNGW0MumXVMKI4lNC9gDM0MOOcaQzLnMY6xIpyCWSYXUiRtV4qjzym+q0CIOT5q3bAlrQBsdyOedwz3A246nawcIjUqMJI7IK2EiXJmDuCVmdsYMzmtJUJ2mjLY9Z886I3WtC2BrI/Awul4L38flhTtTI6W3kauVHJ0Ls/tDGEQfJW8tG5wFirpj/vmw/zvb7n0sjBFEEeVOB7fi1qAvujLBt1GSQarUoPTx5BmBnZLHDkpd/k34H/GA/XiyqBz7agLfoBnf1yfFJliGlH8aGtSIq94RTuoAnh0apxtRGtwwuaRS8FvejCSDvqGWgNUp/qRQ9kTKjGaXPhpwmNL4Bt7GlAGw9GG0BCNYmzfNiat85bAw2obIGdDtfBuQ0vLA09tY2qvOdhK6BjVnI5jawIkmUEfnf+qlV4aXaMNs0D427pP02bpIZZMYimSha0lWdYz9AFbW7vEG3GmTyvWWrv6Qx3KXPaehCqIWdNwMO3XYgJRMM4sL2Bjj6pJf3Ro3S/n/Ho30dnjn4Ikqd2bS5Fx5nqMOYpBkB/Pdl15DFTqFbSyrqpXqyCqauqaRqaznjTak4bejGJVDgzkHWvOQ027wURqjpopEXmitkLIbFe2s9RceO6NS/lMSINzVCa07YwUo3Tdho7zo4CM+3sIsq7jLRtJCFOIRjNmgGmngl6mtY6+uUxOPlCaRkDGvdhaP56E+YIsmtjyegPBru7QaSD+sBi1xzwgj7EjCL7sGhI9CoEVswSoRKiR2iTFrSxXeApXdauEQ5gGpAFbVFJs2OqVTARH5ULtdkkwbcTV+L1DaWqf9a0SbScynnsWZK2Jx80cWzNZpJlgTeHVc0uIm3ThpxtNLkx9ntr8mOgxi9rYIwwc18FUf5gGmYFhJQW+duotgujTqNF65VIZWcNqkNLOdg9vqCNf24WdghzXmuVgoIApoGyhzUaFrSBrJxWDtUovYC2qy3UFktwnXydPw1GLa83T0C0szNSKpmpXE3tiNO2KH4or65cY4bxkOmYCE0n8sbFC+s/Nh99j8VPH2kzjZTneztPUI4/jmZ+taNNuCbb4wyobBvkoGNtO2ttFaLmwfIf9222kvQwxTDx1iJNTAzvKRQjRkFbCeM+jSXsM8uZrcxpC0sdLDZMF1hj3qR19rRJCi33HLndr3HaDm5zKIF5n9+OGWkuLl8P/Jff6XT8olQkGb+NZXAv00eFzaNFt8JLGnwHBgxKWtBGY8hcK/TwNrCDSLr0bYrCKRhuGIam9fBSuQpVbpGAhPUJVpwlzxxx01jQRupWC8Y0G5tqxX3s8L7AgjY9PBvagDc0pyHWR/0Sq6PQg6RkcLlgBLc4bRsR8w+yiNEFGHjHY+w+sNhW08UncqZXlq0IiA+htKStvovhjrv/BeZq4z1HUpvTxnRcrbWWXyyQb8ZYZu0gbYSUUX6tfIjMajGuGqdNcp/wwQ59HyurGS/leU06KoensZ32GaBWUOHdGxhZbzvQDC2BwrxdVJgd01J4adoLXDWd5xmtfgXrh9SzqLvbyeIgdIqzq6nqdueJlezv6thhWtC2KK4OgdP2I5gWksnV5mEuCf5iXumBgiq4XV1JJlCwleEbCe90oJymEVGwgIV0Fy4VjYdFfQh/OnjLiDAGEm2pJDyjrXVY2dhms1o0uByEPC8xW30TU3hv1M6T0NqyzSmmtFPDo8TopUaMD4SXbWbpG5zNpmdveVjGOrM866kBzmdJWzCtOs2n27txo91u9wJOW1ietdsZT3SZOphxk3fyqWpZWNRa0STPQFaEGTxtW8vHtgUL7k39kYszIIGaFtYw7Bv7UIdAvNZ3Zo2AnNWT+0WPAt3FfIkXOf3wkaETXGvLVo0t+PWQunbJ9hKKHUk3inG2YYjdy1L38eOpbsckrKEid2olG0jD7GtJG0103cZbiAfTCGOo1FyJ04bhWysVLXAlUJMn/f7UNTALAkBcCfDLEKuoXX6y39tVGQ9biqu6hD+AGIZRudHb399WE6BQNRmIDPKBZTJ3RrRFmGXk/rwOgDjfHFQ8trjvDJaqwNwUfFLesrhRkXm5XdTccaQHvJHxPer0R3gNrGHafuhOPMVHmo+sPvaJC9roofvMYJiB6/IL4nMh/BM6h8KSxK3zy8zHhhsKMEu3WOAGcbwInbjRgFDrRD37FVCMhmGRPDXtxqDX6w26uqolDJwpPQA+Kor3Z/DPfPJL2uZXkhQP22YtE0igi7s5Jx/H8mQCBCOTyqFff2q4By8lsnyv8K/jYIoDcJyc9cPn1O7PRgGTGO5BWtw3e/4N3mXekC2v+ozbywcaGTbl91YIkY4v8snAeLK7H1Hxj1o8DyKe+IJoBW3PAxvTD1+VhNqeC9jCgWLxRQ/jZQNXW/8ZG/gE/hmwsSpPVtsDd34BdVguO+a5/fdmVoSisMj3j23fE/jngJJ6C28UvOhxvGTgD++e7hNb5wHzsl/QJiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPC8+D815xgHg8HQZwAAAABJRU5ErkJggg==" alt=""/>
        <div id={STYLE.c2}>
<li>Tv</li> 
<li>Movies</li>
<li>Sports</li>
<li>Disney+</li>
<li>KIDS</li>
        </div>
        <div id={STYLE.c3} ><input type="search" placeholder="search" />
        <a href="subscribe" id={STYLE.c4}>subscribe</a>
        </div>
        </div>
    )
}
export default Hotstar;
import React, {useEffect, useState} from 'react';
import {Terminal} from 'primereact/terminal';
import {TerminalService} from 'primereact/terminalservice';
import './style.css'
import {EmbeddedGet} from "../../service/connectService/AppService";
import {APP_API} from "../../service/Api";

export const UserTerminal = () => {
    const [courses, setCourses] = useState([])
    const [promts, setPromts] = useState('sayfullodev')
    const getAll = async () => {
        try {
            const res = await EmbeddedGet(APP_API.course, "data")
            setCourses(res)
        } catch (err) {
        }
    }
    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;
        switch (command) {
            case 'tozalash':
                response = null;
                break;

            case "kurslar":
                if (promts === "sayfullodev") {
                    response =
                        courses.length === 0 ?
                            "Hozircha kurslar mavjud emas"
                            :
                            courses.map((course, i) => (
                                i + 1 + ". " + course.name + "\n"
                            )) + " tanlang..."
                    setPromts("kurslar")
                    console.log(command)
                } else {
                    response = 'Ushbu kamanda topilmadi: ' + command;
                    console.log(command)
                }
                console.log(command)
                break
            case "orqaga":
                if (promts === "kurslar") {
                    setPromts("sayfullodev")
                    console.log(command)
                }
                console.log(command)
                break
            default:
                let auth = 0
                if (promts === "kurslar") {
                    const res = courses[command - 1]
                    console.log(res)
                    if (res !== undefined || courses.length >= command) {
                        response = res.name
                        auth++
                        console.log(res)
                    } else {
                        response = 'Ushbu kurs topilmadi: ' + command;
                    }
                }
                if (auth === 0) {
                    response = 'Ushbu kamanda topilmadi: ' + command;
                }
                break;
        }
        if (response)
            TerminalService.emit('response', response);
        else
            TerminalService.emit('clear');
    };
    console.log(promts)
    useEffect(() => {
        getAll()
    }, [])

    useEffect(() => {
        TerminalService.on('command', commandHandler);
        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);

    return (
        <div className={"container d-flex align-items-end justify-content-center flex-column"}>
            <div className="app-content w-100 pt-3 p-md-3 p-lg-4 mt-3" style={{background: 'white'}}>
                <div className="container-xl">
                    <div className="row g-3 mb-4 align-items-center justify-content-between">
                        <div className="col-auto">
                            <h1 className="app-page-title mb-0">Terminal asosida ishlash</h1>
                        </div>
                        <div className="card terminal-demo bg-dark text-light p-3">
                            <p>
                                Hush kelibsiz ushbu terminal orqali kurslarni yoki kodlarni yuklab olishingiz mumkin va
                                hokazo ishlarni. Ushbu terminal orqali ishlashingiz uchun pastdagi videoni ko'rib
                                chiqishingiz kerak bo'ladi
                            </p>
                            <Terminal welcomeMessage="Hush kelibsiz sayfullodev terminaliga" prompt={promts + " $"}
                                      className={"bg-dark text-light"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}
        
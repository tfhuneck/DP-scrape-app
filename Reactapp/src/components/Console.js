import React, { Component } from 'react';
import { useState, useEffect } from 'react'
import Terminal from 'terminal-in-react';

const Console = () => {

  const showMsg = () => 'Terminal: ...';

    return (
        <>
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "20vh"
                }}
            >
                <Terminal
                    watchConsoleLogging
                    color='green'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{showmsg: {showMsg},
                            print:('')}}
                />
            </div>
        </>
    )
}

export default Console;
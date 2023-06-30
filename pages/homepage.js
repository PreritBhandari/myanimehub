"use client";
import { Card, Grid, useTheme } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react'
import { CustomCard } from '../components/customCard';

function HomePage() {


    return (
        <div className=" grid grid-cols-1 md:grid-cols-5 mb-10 place-items-center h-[80vh] items-center justify-center text-center overflow-scroll w-12/12  max-w-10xl  z-20">
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
        </div>
    )
}

export default HomePage;
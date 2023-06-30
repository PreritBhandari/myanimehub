"use client";
import { Card, Grid, useTheme } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react'
import { CustomCard } from '../components/customCard';
import { useSelector } from 'react-redux';
import { animeAdditionSelector } from '../rtk/slices/animeAdditionSlice';

function HomePage() {
    const { loading, pagination, animeOverview } = useSelector(animeAdditionSelector);

    return (
        <div className=" grid grid-cols-1 md:grid-cols-5 mb-5 place-items-center h-[87vh] items-center justify-center text-center overflow-scroll w-12/12  max-w-10xl  z-20">
            {animeOverview && animeOverview.map((item) => <CustomCard key={item.mal_id} animeData={item} />
            )}

        </div>
    )
}

export default HomePage;
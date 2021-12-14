import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { RouteInfo } from '@jup-ag/core'

import main from '.'

const CoreExample = () => {
    const [routesResult, setRoutesResult] = useState<{ routesInfos: RouteInfo[]; cached: boolean; }>({ routesInfos: [], cached: false })

    useEffect(() => {
        main().then(result => {
            if (result) {
                setRoutesResult(result)
            }
        })
    }, [])

    return (
        <>
            <Text style={{ fontWeight: '600', fontSize: 16, marginTop: 24 }}>Core Example</Text>
            <Text>
                Possible number of routes: {routesResult.routesInfos.length}
            </Text>
            <Text>
                Is cached?: {String(routesResult.cached)}
            </Text>
            <Text>
                Best quote: {routesResult.routesInfos[0] ? routesResult.routesInfos[0].outAmount : ''}
            </Text>
        </>
    )
}

export default CoreExample

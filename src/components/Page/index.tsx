import React from 'react'


import DefaultOverlayContent from "../../DefaultOverlayContent"
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer } from './styles'

import { ModelSection, ModelsWrapper } from "../Model";

const Page: React.FC = () => {

    return (
        <Container>
           <ModelsWrapper>
                <div>
                    {[
                        'Model One',
                        'Model Two',
                        'Model Theree',
                        'Model Four',
                        'Model Five',
                        'Model Six',
                        'Model Seven',
                    ].map(modelName => (
                        <ModelSection
                        className="colored"
                            modelName = {modelName}
                            overlayNode={
                                <DefaultOverlayContent 
                                    label={modelName}
                                    description="Order Online for Delivery"                         
                                />
                            }
                        />
                    ))}
                   
                </div>

                <Spacer />
                           
               <UniqueOverlay />
           </ModelsWrapper>
        </Container>
    )
}

export default Page
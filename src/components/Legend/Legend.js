import React, { Component } from 'react';
import cssClass from './Legend.module.css';

class Legend extends Component {

  render() {

    return (
      <div className={cssClass.Outer}>

        <div className={cssClass.Box1}>
        <table>
            <tbody>
              <tr>
                <td><div className={[cssClass.Dot, cssClass.dry].join(' ')}></div></td>
                <td><div>Dry</div></td>
                <td><div className={[cssClass.Dot, cssClass.solubilized].join(' ')}></div></td>
                <td><div>Solubilized</div></td>
              </tr>
              
            </tbody>
          </table>
        </div>

        <div className={cssClass.Box2}>
        <table>
            <tbody>
              <tr>
                <td className={cssClass.vendor}><div>Vendor</div></td>
                <td className={cssClass.screening}><div>Screening</div></td>
              </tr>
              <tr>
                <td className={cssClass.master_twin}><div>Master Twin</div></td>
                <td className={cssClass.hit_collection}><div>Hit Collection</div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Legend;
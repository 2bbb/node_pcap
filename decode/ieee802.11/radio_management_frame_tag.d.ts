import { BaseRadioManagementFrameTag, ChannelFrameTag, ERPFrameTag, ExtendedRatesFrameTag, RatesFrameTag, RSNFrameTag, SSIDFrameTag, TIMFrameTag, UnknownFrameTag, VendorSpecificFrameTag } from "./radio_management_frame_tags";

declare type RadioManagementFrameTag = SSIDFrameTag
                                     | RatesFrameTag
                                     | ChannelFrameTag
                                     | TIMFrameTag
                                     | ERPFrameTag
                                     | RSNFrameTag
                                     | ExtendedRatesFrameTag
                                     | VendorSpecificFrameTag
                                     | UnknownFrameTag;

export = RadioManagementFrameTag;
